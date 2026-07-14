import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { rooms } from "@/data/rooms";
import { whatsappLink } from "@/data/hotel";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function BookingWidget({ defaultRoom }: { defaultRoom?: string }) {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState(defaultRoom ?? "");

  const reserve = () => {
    const roomName = room ? t.rooms.items[room as keyof typeof t.rooms.items].name : "";
    const parts = [
      t.whatsappMsg,
      checkIn && `${t.booking.checkin}: ${format(checkIn, "PPP")}`,
      checkOut && `${t.booking.checkout}: ${format(checkOut, "PPP")}`,
      `${t.booking.guests}: ${guests}`,
      roomName && `${t.booking.room}: ${roomName}`,
    ].filter(Boolean);
    window.open(whatsappLink(parts.join("\n")), "_blank");
  };

  const dateBtn = (value: Date | undefined, placeholder: string) => (
    <Button
      variant="outline"
      className={cn(
        "h-12 w-full justify-start rounded-none border-[#0F2A43]/10 bg-[#FAFAFA] text-left font-light transition-all duration-300 hover:border-[#C9A227]/40 hover:bg-[#FAFAFA]/50 focus-visible:ring-1 focus-visible:ring-[#C9A227]",
        !value && "text-muted-foreground",
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4 text-[#C9A227] shrink-0" />
      <span className="text-sm tracking-wide text-[#0F2A43]">
        {value ? format(value, "PP") : placeholder}
      </span>
    </Button>
  );

  return (
    <section id="booking" className="relative z-20 -mt-24 px-4 sm:-mt-20">
      <div className="container-lux">
        <div className="rounded-none border border-[#C9A227]/25 bg-white/95 p-6 shadow-[0_25px_50px_-12px_rgba(15,42,67,0.15)] backdrop-blur-md sm:p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            <Field label={t.booking.checkin}>
              <Popover>
                <PopoverTrigger asChild>{dateBtn(checkIn, t.booking.checkin)}</PopoverTrigger>
                <PopoverContent className="w-auto p-0 border-[#C9A227]/20" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className={cn("p-3 pointer-events-auto bg-white")}
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <Field label={t.booking.checkout}>
              <Popover>
                <PopoverTrigger asChild>{dateBtn(checkOut, t.booking.checkout)}</PopoverTrigger>
                <PopoverContent className="w-auto p-0 border-[#C9A227]/20" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(d) => d <= (checkIn ?? new Date())}
                    initialFocus
                    className={cn("p-3 pointer-events-auto bg-white")}
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <Field label={t.booking.guests}>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="h-12 rounded-none border-[#0F2A43]/10 bg-[#FAFAFA] text-sm tracking-wide text-[#0F2A43] focus:ring-1 focus:ring-[#C9A227] transition-colors hover:border-[#C9A227]/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-[#C9A227]/20">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)} className="text-sm text-[#0F2A43] focus:bg-[#F3E9D2]/40 focus:text-[#0F2A43]">
                      {n} {n === 1 ? t.booking.guest : t.booking.guestsLabel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label={t.booking.room}>
              <Select value={room} onValueChange={setRoom}>
                <SelectTrigger className="h-12 rounded-none border-[#0F2A43]/10 bg-[#FAFAFA] text-sm tracking-wide text-[#0F2A43] focus:ring-1 focus:ring-[#C9A227] transition-colors hover:border-[#C9A227]/40">
                  <SelectValue placeholder={t.booking.selectRoom} />
                </SelectTrigger>
                <SelectContent className="border-[#C9A227]/20">
                  {rooms.map((r) => (
                    <SelectItem key={r.id} value={r.id} className="text-sm text-[#0F2A43] focus:bg-[#F3E9D2]/40 focus:text-[#0F2A43]">
                      {t.rooms.items[r.id as keyof typeof t.rooms.items].name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="flex items-end">
              <button
                onClick={reserve}
                className="h-12 w-full rounded-none bg-[#0F2A43] text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#F3E9D2] transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0F2A43] shadow-md hover:shadow-lg"
              >
                {t.booking.reserve}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#0F2A43]/60">
        {label}
      </label>
      {children}
    </div>
  );
}
