import {useCallback, useEffect} from "react";
export function UseInteractOutside(containerRef, onInteractOutside) {
    const handleDocumentClick = useCallback(
        (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                if (onInteractOutside) {
                    onInteractOutside(event);
                }
            }
        },
        [containerRef, onInteractOutside]
    );

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    });
}