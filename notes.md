# Cycle of React
- Render
- Diff
- Run cleanups (from effects)
- Apply changes to DOM
- Sync refs
- Run effects

# Special props
- children
- key
- ref
- className

# Hooks
- useState
- useMemo
- useCallback
- useRef
- useEffect

# The Rule of Re-render
A component re-renders ONLY IF
its state is updated OR IF
(its parent re-renders AND NOT memoized)