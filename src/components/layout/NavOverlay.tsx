type NavOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavOverlay({ open, onClose }: NavOverlayProps) {
  return (
    <div
      aria-hidden="true"
      onClick={onClose}
      className={`fixed inset-0 z-30 bg-navy-900/50 transition-opacity duration-200 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    />
  );
}
