export default function SlotLayout({children}: LayoutProps<'/'>) {
  return (
    <div>
      <h2>Slot Layout</h2>
      {children}
    </div>
  );
}
