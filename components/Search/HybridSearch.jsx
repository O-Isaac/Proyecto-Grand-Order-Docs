import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { DocSearchModal } from "@docsearch/react";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

export default function HybridSearch({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      const hasCommand = event.metaKey || event.ctrlKey;
      if (hasCommand && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const modal = useMemo(() => {
    if (!isMounted || !isOpen) {
      return null;
    }

    return createPortal(
      <DocSearchModal
        appId={appId}
        apiKey={apiKey}
        indexName={indexName}
        initialScrollY={window.scrollY}
        onClose={() => setIsOpen(false)}
        placeholder="Buscar en la documentacion..."
        translations={{
          modal: {
            searchBox: {
              resetButtonTitle: "Limpiar",
              resetButtonAriaLabel: "Limpiar",
              cancelButtonText: "Cerrar",
              cancelButtonAriaLabel: "Cerrar"
            },
            noResultsScreen: {
              noResultsText: "No se encontraron resultados para esta busqueda.",
              suggestedQueryText: "Prueba con",
              reportMissingResultsText: "Crees que hay un error en los resultados?",
              reportMissingResultsLinkText: "Envianos feedback"
            },
            footer: {
              selectText: "Seleccionar",
              navigateText: "Navegar",
              closeText: "Cerrar",
              searchByText: "Busqueda por"
            }
          }
        }}
      />,
      document.body
    );
  }, [isMounted, isOpen]);

  return (
    <div className={className}>
      <button
        type="button"
        className="gdo-search-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir busqueda"
      >
        <span className="gdo-search-trigger-icon" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
            <path
              d="M13.5 13.5L18 18M15.5 9A6.5 6.5 0 1 1 2.5 9A6.5 6.5 0 0 1 15.5 9Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="gdo-search-trigger-placeholder">Buscar en la documentacion...</span>
        <span className="gdo-search-trigger-kbd" aria-hidden="true">Ctrl K</span>
      </button>
      {modal}
    </div>
  );
}