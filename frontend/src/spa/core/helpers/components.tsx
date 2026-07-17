import { Suspense } from 'react';

export const renderLazy = (LazyComponent, props: any, fallback = null) => (
    <Suspense fallback={fallback}>
        <LazyComponent {...props}/>
    </Suspense>
);
