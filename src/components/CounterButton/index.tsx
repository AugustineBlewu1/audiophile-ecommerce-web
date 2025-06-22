import { Button } from "@/components/ui/button";

export type CounterButtonProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

export default function CounterButton({
  value,
  increment,
  decrement,
}: CounterButtonProps) {
  return (
    <div className="inline-flex items-center gap-2  px-2 py-1 bg-muted">
      <Button
        variant="ghost"
        size="icon"
        onClick={decrement}
        className="text-xl font-bold text-secondary/50"
      >
        –
      </Button>
      <span className="w-8 text-center text-base font-medium">{value}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={increment}
        className="text-xl font-bold text-secondary/50"
      >
        +
      </Button>
    </div>
  );
}
