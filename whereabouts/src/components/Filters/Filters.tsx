import { ReactElement } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import TagFilter from "./components/TagFilter.tsx";

import styles from "./Filters.module.css";

export default function Filters(): ReactElement {
  return (
    <div className={styles.Filters}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TagFilter />
      </ErrorBoundary>
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>خطای غیرمنتظره:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}> تلاش مجدد</button>
    </div>
  );
}
