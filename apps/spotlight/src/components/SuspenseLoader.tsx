/**
 * This component covers the whole screen and is used as a fallback for Suspense components.
 */
export function SuspenseLoader() {
  return (
    <div className="h-screen flex content-center justify-center flex-wrap">
      <span className="text-2xl animate-pulse">Cargando...</span>
    </div>
  );
}

export default SuspenseLoader;
