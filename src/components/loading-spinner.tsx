import React, { useEffect, useState } from "react";
import styles from "./loading-spinner.module.css";

export default function LoadingSpinner() {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(true);
    }, 100);

    return () => clearTimeout(timeout);
  });

  return showSpinner ? <div className={styles.loader} /> : null;
}
