import { Suspense } from 'react';

export const renderLazy = (LazyComponent, props: unknown, fallback = null) => (
    <Suspense fallback={fallback}>
        <LazyComponent {...props!}/>
    </Suspense>
);
