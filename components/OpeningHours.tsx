type OpeningHourItem = {
  day: string;
  hours: string;
};

type OpeningHoursProps = {
  title: string;
  items: readonly OpeningHourItem[];
};

export default function OpeningHours({ title, items }: OpeningHoursProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-dark">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-dark/70">
        {items.map((item) => (
          <div key={item.day} className="flex items-center justify-between">
            <span>{item.day}</span>
            <span className="font-medium text-dark">{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
