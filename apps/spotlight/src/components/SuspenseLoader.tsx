/**
 * This component covers the whole screen and is used as a fallback for Suspense components.
 */
export function SuspenseLoader() {
  return (
    <div className="flex h-screen flex-wrap content-center justify-center">
      <span className="animate-pulse text-2xl">Cargando...</span>
    </div>
  );
}

export default SuspenseLoader;
