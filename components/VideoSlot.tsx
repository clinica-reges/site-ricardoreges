import { SHOW_VIDEO_SLOTS } from '@/lib/site';

// Placeholder discreto de vídeo, oculto por flag (Shorts entram depois).
// Sem buraco visual quando a flag está desligada.
export default function VideoSlot({ label }: { label: string }) {
  if (!SHOW_VIDEO_SLOTS) return null;
  return (
    <div className="video-slot" role="note">
      <span aria-hidden="true">▶</span>
      <span>Vídeo em breve: “{label}”</span>
    </div>
  );
}
