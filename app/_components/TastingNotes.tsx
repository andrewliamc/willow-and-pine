export default function TastingNotes({ notes }: { notes: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {notes.map((note) => (
        <span
          key={note}
          className="rounded-full bg-clay/15 text-forest text-xs font-subheading px-3 py-1 border border-clay/30"
        >
          {note}
        </span>
      ))}
    </div>
  );
}
