import type { Page, SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = { title: "Untitled", createdAt: "2026-11-13T05:21:26.430Z" };

const Blank: Page = () => <div style={{ width: '100%', height: '100%', background: '#ffffff' }} />;

export default [Blank] satisfies Page[];
