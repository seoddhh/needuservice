import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { ImagePlaceholder } from '@open-slide/core';

import logo from './assets/logo.png';
import mascot from './assets/mascot.png';
import mascotWorried from './assets/mascot-worried.png';
import screenLanding from './assets/screen-landing.webp';
import screenHome from './assets/screen-home.webp';
import screenChat1 from './assets/screen-chat-1.webp';
import screenChat2 from './assets/screen-chat-2.webp';
import screenProfile from './assets/screen-profile.webp';
import screenSelf from './assets/screen-self.webp';
import screenGift from './assets/screen-gift.webp';
import teamJuno from './assets/team-juno.jpg';
import teamZayn from './assets/team-zayn.jpg';
import teamFinn from './assets/team-finn.jpg';
import teamLewis from './assets/team-lewis.jpg';
import teamMond from './assets/team-mond.jpg';
import teamCindy from './assets/team-cindy.jpg';
import archManage from './assets/arch-manage.png';
import archDeploy from './assets/arch-deploy.png';
import archCicd from './assets/arch-cicd.png';
import archMonitoring from './assets/arch-monitoring.png';
import asset from '@assets/메인페이지.png';
import asset2 from './assets/메인페이지.png';
import asset3 from './assets/상품상세.png';
import asset4 from './assets/메인페이지 알림.png';
import asset5 from './assets/나를위한 상품.png';
import asset1 from './assets/나를위한 상품-1.png';
import asset20261112212908 from './assets/스크린샷 2026-11-12 21.29.08.png';
import asset6 from './assets/분석전 메인페이지.png';












/*
 * 니쥬(NeedU) 프로젝트 결과 보고서
 *
 * 구조: 01 팀 구성 및 역할 > 02 프로젝트 개요 > 03 프로젝트 수행 경과(사용자 흐름 A, B)
 *      > 04 프로젝트 결과 > 05 활용방안 및 기대효과 > 06 자체 평가 의견 및 후기 > 시연 > Q&A
 *      > 부록 A 아키텍처, 부록 B 스택별 기술 상세 (발표에서는 넘기는 자료)
 *
 * 점선 밑줄(<Fill>)과 점선 상자(<Slot>)는 아직 채워야 하는 칸입니다.
 * 내용을 채운 뒤 <Fill>…</Fill> 태그를 지우면 일반 텍스트로 바뀝니다.
 */

/* ───────────────────────── Design system ───────────────────────── */

export const design: DesignSystem = {
  palette: { bg: '#FFFDF4', text: '#151515', accent: '#FEE500' },
  fonts: {
    display:
      '"Plus Jakarta Sans", "Pretendard Variable", Pretendard, -apple-system, "Apple SD Gothic Neo", sans-serif',
    body: '"Pretendard Variable", Pretendard, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
  },
  typeScale: { hero: 112, body: 32 },
  radius: 36,
};

const warm = '#FFD84D';
const muted = '#777777';
const surface = '#FFFFFF';
const line = '#ECE7D3';
/** 자간은 세 가지만 쓴다: 제목과 큰 숫자(display), 본문과 한글 라벨(body), 쪽 번호 숫자(label). */
const track = { display: '-0.03em', body: '-0.01em', label: '0.1em' } as const;
const softYellow = '#FFF6B8';

const FONT_LINKS: [string, string][] = [
  [
    'osd-webfont-needu-pitch-kr',
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
  ],
  [
    'osd-webfont-needu-pitch-en',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap',
  ],
];
if (typeof document !== 'undefined') {
  for (const [id, href] of FONT_LINKS) {
    let link = document.getElementById(id) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    if (link.href !== href) link.href = href;
  }
}

/* ───────────────────────── Shared components ───────────────────────── */

const Slide = ({ children, bg }: { children: ReactNode; bg?: string }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: bg ?? 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-body)',
      letterSpacing: track.body,
      wordBreak: 'keep-all',
    }}
  >
    {children}
  </div>
);

const Circle = ({ size, left, top, color }: { size: number; left: number; top: number; color?: string }) => (
  <div
    style={{
      position: 'absolute',
      width: size,
      height: size,
      left,
      top,
      borderRadius: '50%',
      background: color ?? 'var(--osd-accent)',
    }}
  />
);

const Box = ({
  left,
  top,
  width,
  children,
  style,
}: {
  left: number;
  top: number;
  width?: number;
  children: ReactNode;
  style?: CSSProperties;
}) => <div style={{ position: 'absolute', left, top, width, ...style }}>{children}</div>;

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: track.body,
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <span
      style={{
        width: 30,
        height: 22,
        borderRadius: 6,
        background: 'var(--osd-text)',
        display: 'inline-block',
        boxShadow: '6px 6px 0 var(--osd-accent)',
      }}
    />
    {children}
  </div>
);

const H = ({ size, children, style }: { size: number; children: ReactNode; style?: CSSProperties }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: track.display,
      margin: 0,
      ...style,
    }}
  >
    {children}
  </h2>
);

const P = ({ size, children, style }: { size?: number; children: ReactNode; style?: CSSProperties }) => (
  <p
    style={{
      fontSize: size ?? 'var(--osd-size-body)',
      lineHeight: 1.5,
      margin: 0,
      color: muted,
      fontWeight: 500,
      ...style,
    }}
  >
    {children}
  </p>
);

/** 채워야 하는 글자 칸 — 점선 밑줄. 배경색에 맞춰 글자색을 따라갑니다. */
const Fill = ({ children }: { children: ReactNode }) => (
  <span style={{ opacity: 0.55, borderBottom: '2px dashed currentColor', fontWeight: 600 }}>{children}</span>
);

/** 채워야 하는 상자 — 점선 테두리 */
const Slot = ({ children, height, style }: { children: ReactNode; height?: number; style?: CSSProperties }) => (
  <div
    style={{
      height: height ?? 110,
      boxSizing: 'border-box',
      borderRadius: 28,
      border: `3px dashed ${muted}`,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      color: muted,
      fontSize: 26,
      fontWeight: 700,
      ...style,
    }}
  >
    {children}
  </div>
);

// 이미지 JSX는 각 페이지에 두어 인스펙터에서 화면별로 교체합니다.
const Phone = ({ children, width, left, top, rotate }: { children: ReactNode; width: number; left: number; top: number; rotate?: number }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width,
      padding: 10,
      boxSizing: 'border-box',
      borderRadius: width * 0.13,
      background: '#151515',
      boxShadow: '0 30px 60px rgba(21,21,21,0.18)',
      rotate: rotate ? `${rotate}deg` : undefined,
    }}
  >
    {children}
  </div>
);

const Pill = ({ children, dark, size, soft }: { children: ReactNode; dark?: boolean; size?: number; soft?: boolean }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '12px 26px',
      borderRadius: 999,
      fontSize: size ?? 26,
      fontWeight: 700,
      background: dark ? 'var(--osd-text)' : soft ? softYellow : surface,
      color: dark ? '#FFFFFF' : 'var(--osd-text)',
      border: dark ? 'none' : `2px solid var(--osd-text)`,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const Num = ({ n, dark }: { n: string; dark?: boolean }) => (
  <span
    style={{
      flex: 'none',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: dark ? 'var(--osd-text)' : 'var(--osd-accent)',
      color: dark ? '#FFFFFF' : 'var(--osd-text)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      fontWeight: 800,
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    {n}
  </span>
);

const card: CSSProperties = {
  background: surface,
  borderRadius: 'var(--osd-radius)',
  border: `2px solid ${line}`,
  boxSizing: 'border-box',
};

/** 본문 페이지 공통 머리말: 챕터 표시 + 페이지 제목 */
const Head = ({ chapter, children, width }: { chapter: ReactNode; children: ReactNode; width?: number }) => (
  <Box left={120} top={100} width={width ?? 1500}>
    <Eyebrow>{chapter}</Eyebrow>
    <H size={64} style={{ marginTop: 26 }}>
      {children}
    </H>
  </Box>
);

/** 상자 위에 걸치는 제목 태그가 달린 카드 (예시 보고서의 라벨 박스) */
const TagBox = ({
  left,
  top,
  width,
  height,
  tag,
  children,
  tone,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  tag: ReactNode;
  children: ReactNode;
  tone?: 'yellow';
}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width,
      height,
      ...card,
      background: tone === 'yellow' ? softYellow : surface,
      border: tone === 'yellow' ? 'none' : card.border,
      padding: '52px 36px 0',
    }}
  >
    <span
      style={{
        position: 'absolute',
        left: 32,
        top: -22,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        borderRadius: 999,
        padding: '8px 22px',
        fontSize: 24,
        fontWeight: 800,
        whiteSpace: 'nowrap',
      }}
    >
      {tag}
    </span>
    {children}
  </div>
);

/* ───────────────────────── Chapter divider ───────────────────────── */

const SubItem = ({ n, children }: { n: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <Num n={n} dark />
    <span style={{ fontSize: 32, fontWeight: 700 }}>{children}</span>
  </div>
);

const Divider = ({ n, title, children, character }: { n: string; title: ReactNode; children?: ReactNode; character?: ReactNode }) => (
  <Slide>
    <Circle size={760} left={1060} top={160} />
    <Circle size={170} left={940} top={800} color={warm} />
    <div
      style={{
        position: 'absolute',
        left: 1060,
        top: 160,
        width: 760,
        height: 760,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: n.length > 2 || /[가-힣]/.test(n) ? 260 : 340,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        letterSpacing: track.display,
        lineHeight: 1,
      }}
    >
      {n}
    </div>
    <Box left={120} top={children ? 300 : 400} width={900}>
      <H size={96} style={{ lineHeight: 1.15 }}>
        {title}
      </H>
    </Box>
    {children ? (
      <Box left={120} top={590} width={900} style={{ display: 'grid', gap: 18 }}>
        {children}
      </Box>
    ) : null}
    {character}
  </Slide>
);

/* ───────────────────────── 00 도입부: 일부러 만든 양산형 AI 디자인 ─────────────────────────
 * 표지부터 팀 소개까지 4장은 "취향 없이 AI가 찍어 낸 발표 자료"를 흉내 낸 페이지입니다.
 * 그라데이션, 격자, 반짝이, 이모지, 우상단 Powered by 문구, 가운데 점, 근거 없는 지표까지 일부러 넣었습니다.
 * 02 프로젝트 개요부터 니쥬 본래 디자인으로 돌아갑니다.
 */

const slopOrange = '#F59E0B';
const slopInk = '#2B2B2B';
const slopMuted = '#8A8070';
const slopGradText: CSSProperties = {
  backgroundImage: 'linear-gradient(90deg, #F7C21A 0%, #FF9F1C 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};
const slopGlass: CSSProperties = {
  background: 'rgba(255,255,255,0.72)',
  border: '2px solid rgba(255,255,255,0.95)',
  borderRadius: 32,
  boxShadow: '0 24px 60px rgba(245,158,11,0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
  backdropFilter: 'blur(14px)',
  boxSizing: 'border-box',
};

const Sparkle = ({ left, top, size }: { left: number; top: number; size: number }) => (
  <span style={{ position: 'absolute', left, top, fontSize: size, lineHeight: 1, color: '#F5B800', textShadow: '0 0 18px rgba(255,200,0,0.6)' }}>✦</span>
);

const SlopSlide = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      color: slopInk,
      fontFamily: 'var(--osd-font-body)',
      wordBreak: 'keep-all',
      backgroundColor: '#FFF8E8',
      backgroundImage: [
        'radial-gradient(circle at 10% 12%, rgba(255,214,0,0.42), transparent 38%)',
        'radial-gradient(circle at 92% 88%, rgba(255,160,60,0.32), transparent 42%)',
        'linear-gradient(rgba(190,160,80,0.08) 1px, transparent 1px)',
        'linear-gradient(90deg, rgba(190,160,80,0.08) 1px, transparent 1px)',
      ].join(', '),
      backgroundSize: '100% 100%, 100% 100%, 80px 80px, 80px 80px',
    }}
  >
    <div style={{ position: 'absolute', right: 120, top: 54, fontSize: 22, fontWeight: 700, color: slopMuted }}>
      ✨ <span style={{ color: slopOrange, fontWeight: 800 }}>NeedU AI</span> · Powered by GenAI
    </div>
    <Sparkle left={980} top={70} size={26} />
    <Sparkle left={1640} top={140} size={48} />
    <Sparkle left={1760} top={230} size={24} />
    <Sparkle left={210} top={930} size={32} />
    {children}
  </div>
);

const SlopPill = ({ children, size }: { children: ReactNode; size?: number }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 30px',
      borderRadius: 999,
      background: 'rgba(255,214,77,0.32)',
      border: '2px solid rgba(245,180,0,0.45)',
      fontSize: size ?? 24,
      fontWeight: 800,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const SlopChip = ({ children }: { children: ReactNode }) => (
  <span style={{ ...slopGlass, borderRadius: 999, padding: '18px 30px', fontSize: 25, fontWeight: 700, whiteSpace: 'nowrap' }}>{children}</span>
);

const SlopMetric = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 82 }}>
    <span style={{ fontSize: 27, fontWeight: 600, color: '#555' }}>{label}</span>
    <span style={{ fontSize: 38, fontWeight: 800, fontFamily: 'var(--osd-font-display)', ...slopGradText }}>{value}</span>
  </div>
);

const Cover: Page = () => (
  <SlopSlide>
    <Box left={120} top={150}>
      <SlopPill>🤖 Next-Gen AI Taste Engine · 프로젝트 결과 보고서</SlopPill>
    </Box>
    <Box left={112} top={250}>
      <div style={{ fontSize: 230, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: '-0.05em', lineHeight: 1 }}>
        <span style={{ backgroundImage: 'linear-gradient(90deg, #151515 30%, #6B5A3A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Need</span>
        <span style={slopGradText}>U</span>
      </div>
    </Box>
    <Box left={120} top={500} width={1100}>
      <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.3 }}>
        🚀 대화로 발견하는 나만의 취향:
        <br />
        <span style={slopGradText}>AI가 재정의하는 초개인화의 미래</span>
      </div>
      <div style={{ fontSize: 31, fontWeight: 500, color: slopMuted, marginTop: 30 }}>
        단순한 선물 추천을 넘어 — 당신의 취향 그 자체를 혁신합니다. ✨
      </div>
      <div style={{ display: 'flex', gap: 18, marginTop: 34 }}>
        <SlopChip>🎯 Hyper-Personalized</SlopChip>
        <SlopChip>🧠 LLM-Powered</SlopChip>
        <SlopChip>⚡ Seamless UX</SlopChip>
      </div>
    </Box>
    <Box left={120} top={870} style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
      <span
        style={{
          padding: '26px 44px',
          borderRadius: 999,
          background: 'linear-gradient(90deg, #F7D33A 0%, #FFB020 100%)',
          boxShadow: '0 18px 40px rgba(255,170,30,0.45)',
          fontSize: 30,
          fontWeight: 800,
          whiteSpace: 'nowrap',
        }}
      >
        Get Started → needu.gift
      </span>
      <div>
        <div style={{ fontSize: 26, fontWeight: 700, color: slopMuted }}>💡 Team 4주라 · 카카오테크 부트캠프</div>
        <div style={{ fontSize: 20, fontWeight: 600, color: slopMuted, marginTop: 8 }}>이름 · 이름 · 이름 · 이름 · 이름 · 이름</div>
      </div>
    </Box>
    <div style={{ ...slopGlass, position: 'absolute', left: 1260, top: 250, width: 540, padding: '44px 44px 36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <span
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: 'linear-gradient(135deg, #FFE066, #FFB020)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 34,
          }}
        >
          🧬
        </span>
        <div>
          <div style={{ fontSize: 30, fontWeight: 800 }}>AI Taste Analysis</div>
          <div style={{ fontSize: 21, fontWeight: 500, color: slopMuted, marginTop: 4 }}>Real-time · Deep Learning</div>
        </div>
      </div>
      <div style={{ height: 12, borderRadius: 6, background: 'rgba(0,0,0,0.06)', marginTop: 40 }}>
        <div style={{ width: '98%', height: '100%', borderRadius: 6, background: 'linear-gradient(90deg, #F7C21A, #FF9F1C)' }} />
      </div>
      <div style={{ marginTop: 22 }}>
        <SlopMetric label="🎯 취향 정확도" value="98.7%" />
        <SlopMetric label="⚡ 분석 속도" value="0.3초" />
        <SlopMetric label="💖 사용자 만족도" value="∞" />
      </div>
      <div style={{ height: 2, background: 'rgba(0,0,0,0.06)', margin: '18px 0 24px' }} />
      <div style={{ fontSize: 23, fontWeight: 700, color: '#B7791F' }}>✨ 당신보다 당신을 더 잘 아는 AI</div>
    </div>
  </SlopSlide>
);

const SlopTocCard = ({ icon, n, title, sub }: { icon: string; n: string; title: string; sub: string }) => (
  <div style={{ ...slopGlass, height: 128, display: 'flex', alignItems: 'center', gap: 28, padding: '0 34px' }}>
    <span
      style={{
        flex: 'none',
        width: 76,
        height: 76,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #FFF1B8, #FFD873)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 38,
      }}
    >
      {icon}
    </span>
    <div>
      <div style={{ fontSize: 33, fontWeight: 800 }}>
        <span style={{ color: slopOrange, marginRight: 12 }}>{n}</span>
        {title}
      </div>
      <div style={{ fontSize: 22, fontWeight: 500, color: slopMuted, marginTop: 6 }}>{sub}</div>
    </div>
  </div>
);

const Contents: Page = () => (
  <SlopSlide>
    <Box left={120} top={100} width={1600}>
      <div style={{ fontSize: 86, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: '-0.02em' }}>
        📚 <span style={slopGradText}>목차</span> (Table of Contents)
      </div>
      <div style={{ fontSize: 29, fontWeight: 500, color: slopMuted, marginTop: 14 }}>
        이 발표를 통해 여러분은 다음과 같은 핵심 인사이트를 얻게 됩니다 💡
      </div>
    </Box>
    <Box left={120} top={300} width={1680} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px 30px' }}>
      <SlopTocCard icon="👥" n="01" title="프로젝트 팀 구성 및 역할" sub="시너지를 만드는 드림팀" />
      <SlopTocCard icon="🎯" n="02" title="프로젝트 개요" sub="왜 지금, 니쥬인가?" />
      <SlopTocCard icon="📈" n="03" title="프로젝트 수행 경과" sub="애자일한 혁신의 여정" />
      <SlopTocCard icon="🏆" n="04" title="프로젝트 결과" sub="임팩트 있는 성과와 지표" />
      <SlopTocCard icon="🌍" n="05" title="활용방안 및 기대효과" sub="무한한 가능성의 확장" />
      <SlopTocCard icon="💭" n="06" title="자체 평가 의견 및 후기" sub="성장과 배움의 순간들" />
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 760,
        width: 1680,
        height: 128,
        boxSizing: 'border-box',
        borderRadius: 32,
        background: 'linear-gradient(90deg, #F7D33A 0%, #FFB020 100%)',
        boxShadow: '0 24px 50px rgba(255,170,30,0.35)',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        padding: '0 40px',
        fontSize: 32,
        fontWeight: 800,
      }}
    >
      <span style={{ fontSize: 44 }}>🔑</span>
      Key Takeaway: 취향은 찾는 것이 아니라, 함께 만들어가는 것입니다.
    </div>
  </SlopSlide>
);

const Ch01: Page = () => (
  <SlopSlide>
    <Box left={0} top={185} width={1920} style={{ textAlign: 'center' }}>
      <SlopPill size={26}>✨ CHAPTER 01 ✨</SlopPill>
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 760,
        top: 280,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FBE04A 0%, #FFB020 100%)',
        boxShadow: '0 0 80px rgba(255,200,40,0.6), 0 30px 60px rgba(255,160,30,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: 240,
          fontWeight: 800,
          fontFamily: 'var(--osd-font-display)',
          letterSpacing: '-0.04em',
          backgroundImage: 'linear-gradient(135deg, #151515 40%, #6B5A3A 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        01
      </span>
    </div>
    <Box left={0} top={705} width={1920} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 92, fontWeight: 800 }}>프로젝트 팀 구성 및 역할 👥</div>
      <div style={{ fontSize: 33, fontWeight: 500, color: slopMuted, marginTop: 30 }}>
        — 혁신은 혼자가 아닌, <span style={{ color: slopOrange, fontWeight: 800 }}>함께</span>할 때 시작됩니다 🤝
      </div>
    </Box>
  </SlopSlide>
);

const SlopMember = ({
  photo,
  name,
  stack,
  title,
  lead,
  tech,
}: {
  photo: string;
  name: string;
  stack: string;
  title: string;
  lead?: boolean;
  tech: string;
}) => (
  <div style={{ ...slopGlass, position: 'relative', padding: 18 }}>
    {lead ? (
      <span
        style={{
          position: 'absolute',
          left: '50%',
          top: -22,
          transform: 'translateX(-50%)',
          zIndex: 2,
          padding: '8px 20px',
          borderRadius: 999,
          background: 'linear-gradient(90deg, #F7D33A, #FFB020)',
          boxShadow: '0 10px 24px rgba(255,170,30,0.45)',
          fontSize: 20,
          fontWeight: 800,
          whiteSpace: 'nowrap',
        }}
      >
        👑 Team Lead
      </span>
    ) : null}
    <div
      style={{
        position: 'relative',
        borderRadius: 22,
        padding: 4,
        background: 'linear-gradient(135deg, #FFE066, #FF9F1C)',
        boxShadow: '0 12px 30px rgba(255,170,30,0.35)',
      }}
    >
      <img src={photo} alt="" style={{ display: 'block', width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: 18 }} />
      <span
        style={{
          position: 'absolute',
          right: 12,
          bottom: 12,
          padding: '4px 14px',
          borderRadius: 999,
          background: 'rgba(21,21,21,0.78)',
          color: '#FFE066',
          fontSize: 17,
          fontWeight: 800,
        }}
      >
        ✨ AI Generated
      </span>
    </div>
    <div style={{ padding: '22px 6px 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 32, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{name}</span>
        <span style={{ padding: '2px 12px', borderRadius: 999, border: '2px solid rgba(245,180,0,0.5)', background: 'rgba(255,214,77,0.3)', fontSize: 21, fontWeight: 800 }}>{stack}</span>
      </div>
      <div style={{ fontSize: 21, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap', ...slopGradText }}>{title}</div>
      <div style={{ fontSize: 23, fontWeight: 600, color: slopMuted, marginTop: 16, lineHeight: 1.5 }}>
        {tech.split(', ').map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </div>
  </div>
);

const Team: Page = () => (
  <SlopSlide>
    <Box left={120} top={88}>
      <SlopPill size={22}>01 · 프로젝트 팀 구성 및 역할</SlopPill>
    </Box>
    <Box left={120} top={168} width={1680}>
      <div style={{ fontSize: 62, fontWeight: 800 }}>
        👥 팀 구성: <span style={slopGradText}>시너지를 극대화하는 드림팀</span> 🚀
      </div>
    </Box>
    <Box left={120} top={330} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 20 }}>
      <SlopMember lead photo={teamJuno} name="juno.kim" stack="FE" title="🧠 Visionary Leader" tech="Next.js, React, TS" />
      <SlopMember photo={teamZayn} name="zayn.noh" stack="BE" title="🔥 Problem Solver" tech="Spring Boot, Redis, MQ" />
      <SlopMember photo={teamFinn} name="finn.jeong" stack="BE" title="🌟 Creative Thinker" tech="Spring Boot, Redis, MQ" />
      <SlopMember photo={teamLewis} name="lewis.seo" stack="AI" title="🤖 AI Enthusiast" tech="LLM, RAG, vLLM" />
      <SlopMember photo={teamMond} name="mond.lee" stack="CL" title="🚀 Cloud Innovator" tech="k8s, Terraform, GCP" />
      <SlopMember photo={teamCindy} name="cindy.lee" stack="CL" title="💡 DevOps Driver" tech="k8s, Docker, CI/CD" />
    </Box>
    <Box left={0} top={958} width={1920} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 29, fontWeight: 700 }}>
        💪 각자의 전문성이 하나로 모여, <span style={{ color: slopOrange, fontWeight: 800 }}>1 + 1 = 3</span>의 시너지를 창출했습니다 ✨
      </div>
    </Box>
  </SlopSlide>
);

/* ───────────────────────── 02 Overview ───────────────────────── */

const Ch02: Page = () => (
  <Divider
    n="02"
    title="프로젝트 개요"
    character={<img src={mascot} alt="" style={{ position: 'absolute', left: 1500, top: 700, width: 320, rotate: '10deg' }} />}
  >
    <SubItem n="01">AI 시대, 취향이 곧 차이</SubItem>
    <SubItem n="02">선물 선택이 어려운 이유</SubItem>
    <SubItem n="03">니쥬가 푸는 방식</SubItem>
  </Divider>
);

/* 똑같은 결과물 사이에서 하나만 다른 칸 */
const SameTile = () => (
  <div style={{ width: 180, height: 180, borderRadius: 32, background: surface, border: `2px solid ${line}`, boxSizing: 'border-box', padding: 30 }}>
    <div style={{ width: 70, height: 14, borderRadius: 7, background: line }} />
    <div style={{ width: 110, height: 14, borderRadius: 7, background: line, marginTop: 14 }} />
    <div style={{ width: 90, height: 14, borderRadius: 7, background: line, marginTop: 14 }} />
  </div>
);

const Era: Page = () => (
  <Slide>
    <Box left={120} top={100} width={960}>
      <Eyebrow>02 프로젝트 개요</Eyebrow>
      <H size={72} style={{ marginTop: 40 }}>
        AI가 누구나 비슷한 결과물을
        <br />
        만들어 내는 시대.
      </H>
      <H size={52} style={{ marginTop: 56, fontFamily: 'var(--osd-font-body)', lineHeight: 1.35 }}>
        개인의 차이는 무엇을 좋아하고
        <br />
        왜 고르는가에서 드러납니다.
      </H>
      <div style={{ width: 120, height: 4, background: 'var(--osd-text)', marginTop: 64 }} />
      <P style={{ marginTop: 40 }}>
        그런데 우리는 정작 자신의 취향과 관심사를
        <br />
        명확히 이해하거나 표현하는 데 어려움을 겪습니다.
      </P>
    </Box>
    <Box left={1180} top={230} width={600} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 180px)', gap: 30 }}>
      <SameTile />
      <SameTile />
      <SameTile />
      <SameTile />
      <div style={{ width: 180, height: 180, borderRadius: 32, background: 'var(--osd-accent)', position: 'relative' }}>
        <img src={mascot} alt="" style={{ position: 'absolute', left: -20, top: -30, width: 220, translate: '20px 35px' }} />
      </div>
      <SameTile />
      <SameTile />
      <SameTile />
      <SameTile />
    </Box>
    <Box left={1180} top={890} width={600} style={{ textAlign: 'center' }}>
      <P size={28} style={{ color: 'var(--osd-text)', fontWeight: 700 }}>같은 도구, 다른 취향</P>
    </Box>
  </Slide>
);

const SurveyStat = ({ value, unit, label, tone }: { value: string; unit: string; label: ReactNode; tone: 'yellow' | 'white' | 'dark' }) => (
  <div
    style={{
      height: 400,
      boxSizing: 'border-box',
      borderRadius: 'var(--osd-radius)',
      padding: '52px 44px',
      background: tone === 'yellow' ? 'var(--osd-accent)' : tone === 'dark' ? 'var(--osd-text)' : surface,
      color: tone === 'dark' ? '#FFFFFF' : 'var(--osd-text)',
      border: tone === 'white' ? `2px solid ${line}` : 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
      <span style={{ fontSize: 140, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: 48, fontWeight: 800, fontFamily: 'var(--osd-font-display)' }}>{unit}</span>
    </div>
    <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.45 }}>{label}</div>
  </div>
);

const GiftProblem: Page = () => (
  <Slide>
    <Head chapter="02 프로젝트 개요" width={1680}>
      선물 선택의 어려움은 취향 정보의 부족에서 시작됩니다
    </Head>
    <Box left={120} top={330} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <SurveyStat value="90" unit="%" tone="white" label={<>선물 선택을<br />고민한 적이 있다</>} />
      <SurveyStat value="57.5" unit="%" tone="yellow" label={<>상대의 취향을 모르는 것이<br />가장 큰 어려움이다</>} />
      <SurveyStat value="80" unit="%" tone="dark" label={<>상대에게 직접 묻는 것이<br />부담스러웠던 적이 있다</>} />
    </Box>
    <Box left={120} top={790} width={1300}>
      <P>
        선물은 상대를 생각하는 마음을 표현하는 수단이지만,
        <br />
        정작 상대가 무엇을 좋아하는지 몰라 고르기 어려운 경우가 많습니다.
      </P>
    </Box>
    <Box left={120} top={960}>
      <div style={{ fontSize: 22, color: muted, fontWeight: 500 }}>자체 설문, 응답자 80명</div>
    </Box>
    <img src={mascotWorried} alt="" style={{ position: 'absolute', left: 1530, top: 760, width: 280 }} />
  </Slide>
);

const GapCircle = ({ left, value, label, tone }: { left: number; value: string; label: ReactNode; tone: 'yellow' | 'white' }) => (
  <div style={{ position: 'absolute', left, top: 330, width: 320, textAlign: 'center' }}>
    <div
      style={{
        width: 320,
        height: 320,
        borderRadius: '50%',
        boxSizing: 'border-box',
        background: tone === 'yellow' ? 'var(--osd-accent)' : surface,
        border: tone === 'white' ? '4px solid var(--osd-text)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 88,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        letterSpacing: track.display,
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: 32, fontWeight: 800, marginTop: 32, lineHeight: 1.4 }}>{label}</div>
  </div>
);

const InfoGap: Page = () => (
  <Slide>
    <Box left={120} top={100} width={800}>
      <Eyebrow>02 프로젝트 개요</Eyebrow>
      <H size={76} style={{ marginTop: 40 }}>
        취향은 있는데,
        <br />
        전해지지 않을 뿐입니다.
      </H>
      <P style={{ marginTop: 48 }}>
        응답자의 72.5%는 자신의 취향을 어느 정도 이상
        <br />
        알고 있다고 답했습니다.
      </P>
      <P style={{ marginTop: 32, color: 'var(--osd-text)', fontWeight: 700 }}>
        문제는 취향을 모르는 데만 있지 않습니다.
        <br />
        내가 가진 취향 정보가 선물하는 사람에게
        <br />
        충분히 반영되지 않는 데에도 있습니다.
      </P>
    </Box>
    <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0 }} aria-hidden="true">
      <path d="M 1288 490 H 1316" stroke="#151515" strokeWidth="4" strokeDasharray="4 14" strokeLinecap="round" />
      <path d="M 1444 490 H 1472" stroke="#151515" strokeWidth="4" strokeDasharray="4 14" strokeLinecap="round" />
    </svg>
    <div
      style={{
        position: 'absolute',
        left: 1320,
        top: 430,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'var(--osd-text)',
        color: 'var(--osd-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 64,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
      }}
    >
      ?
    </div>
    <GapCircle left={960} value="72.5%" tone="yellow" label={<>내 취향은<br />어느 정도 안다</>} />
    <GapCircle left={1480} value="57.5%" tone="white" label={<>상대의 취향을 몰라<br />고르기 어렵다</>} />
    <img src={mascot} alt="" style={{ position: 'absolute', left: 1010, top: 190, width: 200, rotate: '-10deg' }} />
  </Slide>
);

/* 문제 → 니쥬의 답 */
const AnswerCard = ({ n, problem, children }: { n: string; problem: ReactNode; children: ReactNode }) => (
  <div style={{ ...card, height: 300, padding: '40px 40px 0', boxShadow: '0 24px 50px rgba(21,21,21,0.06)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <Num n={n} />
      <span style={{ fontSize: 26, fontWeight: 600, color: muted }}>{problem}</span>
    </div>
    <div style={{ width: 4, height: 36, background: 'var(--osd-text)', margin: '20px 0 20px 26px' }} />
    <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.35 }}>{children}</div>
  </div>
);

const Answer: Page = () => (
  <Slide>
    <Head chapter="02 프로젝트 개요" width={1680}>
      대화 속에서 취향을 찾고, 선물로 잇습니다
    </Head>
    <Box left={120} top={290} width={1400}>
      <P>
        니쥬는 자연스러운 대화 속에서 개인의 취향과 관심사를 발견하고,
        <br />
        이를 나와 상대의 취향에 맞는 상품 추천으로 연결하는 AI 서비스입니다.
      </P>
    </Box>
    <Box left={120} top={450} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <AnswerCard n="1" problem="내 취향을 말로 설명하기 어렵다">
        AI와의 일상 대화로
        <br />
        취향을 구체화합니다
      </AnswerCard>
      <AnswerCard n="2" problem="친구의 취향을 모른다">
        친구의 취향을 확인하고
        <br />
        취향 기반 선물을 추천합니다
      </AnswerCard>
      <AnswerCard n="3" problem="직접 묻기가 부담스럽다">
        익명으로 슬쩍 물어보며
        <br />
        부담을 덜어 줍니다
      </AnswerCard>
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 810,
        width: 1680,
        height: 150,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-accent)',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        fontSize: 34,
        fontWeight: 800,
      }}
    >
      취향을 이해하는 순간부터 선물을 고르는 순간까지, 마음이 더 잘 전해지도록.
    </div>
    <img src={mascot} alt="" style={{ position: 'absolute', left: 1600, top: 770, width: 220, rotate: '8deg' }} />
  </Slide>
);

/* ───────────────────────── 03 Progress (user flow) ───────────────────────── */

const Ch03: Page = () => (
  <Divider
    n="03"
    title={<>프로젝트<br />수행 경과</>}
    character={<img src={mascot} alt="" style={{ position: 'absolute', left: 820, top: 330, width: 240, rotate: '-12deg' }} />}
  >
    <SubItem n="A">나의 취향을 찾고 상품까지</SubItem>
    <SubItem n="B">친구 선물과 슬쩍 물어보기</SubItem>
  </Divider>
);

const FLOW_A = ['메인 페이지', 'AI 채팅', '취향 분석', '상품 목록', '상품 상세', '구매 여부', '메인 페이지 알림'];
const FLOW_B = ['친구 조회', '상품 목록', '상품 상세', '슬쩍 물어보기', '메인 페이지 알림'];

/** 화면 하단 흐름 막대: 지금 화면이 흐름의 몇 번째인지 보여 줍니다. */
const FlowBar = ({ flow, current }: { flow: 'A' | 'B'; current: number }) => {
  const steps = flow === 'A' ? FLOW_A : FLOW_B;
  return (
    <div style={{ position: 'absolute', left: 120, top: 966, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          background: 'var(--osd-text)',
          color: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          fontWeight: 800,
          fontFamily: 'var(--osd-font-display)',
          marginRight: 8,
        }}
      >
        {flow}
      </span>
      {steps.map((s, i) => (
        <span key={s + i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          {i > 0 ? (
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
              <path d="M 0 8 H 18 M 12 2 L 18 8 L 12 14" fill="none" stroke={i <= current ? '#151515' : '#BBBBBB'} strokeWidth="2.5" />
            </svg>
          ) : null}
          <span
            style={{
              height: 46,
              boxSizing: 'border-box',
              padding: '0 18px',
              borderRadius: 999,
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 22,
              fontWeight: i === current ? 800 : 700,
              whiteSpace: 'nowrap',
              background: i === current ? 'var(--osd-accent)' : 'transparent',
              border: i === current ? '2px solid var(--osd-text)' : `2px solid ${i < current ? '#151515' : line}`,
              color: i <= current ? 'var(--osd-text)' : muted,
            }}
          >
            {s}
          </span>
        </span>
      ))}
    </div>
  );
};

/** 흐름 소개용 작은 휴대폰 + 아래 단계 이름 */
const FlowThumb = ({ left, top, width, n, label, children }: { left: number; top: number; width: number; n: string; label: string; children: ReactNode }) => (
  <>
    <Phone width={width} left={left} top={top}>
      {children}
    </Phone>
    <div style={{ position: 'absolute', left, top: top + Math.round((width - 20) * (1794 / 860)) + 48, width, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <Num n={n} />
      <span style={{ fontSize: 26, fontWeight: 800, whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  </>
);

const FlowThumbArrow = ({ left, top }: { left: number; top: number }) => (
  <svg width="40" height="24" viewBox="0 0 40 24" style={{ position: 'absolute', left, top }} aria-hidden="true">
    <path d="M 2 12 H 34 M 24 3 L 34 12 L 24 21" fill="none" stroke="#151515" strokeWidth="3" />
  </svg>
);

const screenImg = (radius: number): CSSProperties => ({
  display: 'block',
  width: '100%',
  aspectRatio: '860 / 1794',
  objectFit: 'contain',
  borderRadius: radius,
  background: surface,
  objectPosition: '50% 50%',
});

const FlowIntroA: Page = () => (
  <Slide>
    <Head chapter="03 프로젝트 수행 경과" width={1400}>나의 취향을 찾고 상품까지</Head>
    <Box left={120} top={260} width={1400}>
      <P>대화로 취향을 발견하고, 그 취향에 맞는 상품을 확인하는 흐름입니다.</P>
    </Box>
    <img src={mascot} alt="" style={{ position: 'absolute', left: 1580, top: 80, width: 230, rotate: '8deg' }} />
    <FlowThumb left={120} top={370} width={200} n="1" label="메인 페이지">
      <img src={asset6} alt="" style={screenImg(18)} />
    </FlowThumb>
    <FlowThumbArrow left={322} top={555} />
    <FlowThumb left={364} top={370} width={200} n="2" label="AI 채팅">
      <img src={screenChat1} alt="" style={screenImg(18)} />
    </FlowThumb>
    <FlowThumbArrow left={566} top={555} />
    <FlowThumb left={608} top={370} width={200} n="3" label="취향 분석">
      <img src={screenProfile} alt="" style={screenImg(18)} />
    </FlowThumb>
    <FlowThumbArrow src={asset5} left={810} top={555} />
    <FlowThumb left={852} top={370} width={200} n="4" label="상품 목록">
      <img src={asset1} alt="" style={screenImg(18)} />
    </FlowThumb>
    <FlowThumbArrow left={1054} top={555} />
    <FlowThumb left={1096} top={370} width={200} n="5" label="상품 상세">
      <img src={asset3} alt='상품 상세 화면' style={{ display: 'block', width: 180, height: 376, borderRadius: 18, objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(0% 0% 17.36% 0%)' }} />
    </FlowThumb>
    <FlowThumbArrow left={1298} top={555} />
    <FlowThumb left={1340} top={370} width={200} n="6" label="구매 여부">
      <ImagePlaceholder hint="구매 여부 확인 화면" width={180} height={376} style={{ borderRadius: 18, background: surface }} />
    </FlowThumb>
    <FlowThumbArrow src={asset4} left={1542} top={555} style={{ objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(0% 0% 17.36% 0%)', translate: '0px 0px' }} />
    <FlowThumb left={1584} top={370} width={200} n="7" label="메인 페이지 알림">
      <img src={asset4} alt='메인 페이지 알림 화면' style={{ display: 'block', width: 180, height: 376, borderRadius: 18, objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(0% 0% 17.36% 0%)' }} />
    </FlowThumb>
  </Slide>
);

const FlowIntroB: Page = () => (
  <Slide>
    <Head chapter="03 프로젝트 수행 경과" width={1400}>
      흐름 B 친구 선물과 슬쩍 물어보기
    </Head>
    <Box left={120} top={260} width={1400}>
      <P>친구의 취향으로 선물을 고르고, 망설여지면 익명으로 슬쩍 물어보는 흐름입니다.</P>
    </Box>
    <img src={mascotWorried} alt="" style={{ position: 'absolute', left: 1560, top: 90, width: 250 }} />
    <FlowThumb left={160} top={370} width={220} n="1" label="친구 조회">
      <ImagePlaceholder hint="친구 조회 화면" width={200} height={417} style={{ borderRadius: 20, background: surface }} />
    </FlowThumb>
    <FlowThumbArrow left={422} top={580} />
    <FlowThumb left={502} top={370} width={220} n="2" label="상품 목록">
      <img src={screenGift} alt="" style={screenImg(20)} />
    </FlowThumb>
    <FlowThumbArrow left={764} top={580} />
    <FlowThumb left={844} top={370} width={220} n="3" label="상품 상세">
      <ImagePlaceholder hint="상품 상세 화면" width={200} height={417} style={{ borderRadius: 20, background: surface }} />
    </FlowThumb>
    <FlowThumbArrow left={1106} top={580} />
    <FlowThumb left={1186} top={370} width={220} n="4" label="슬쩍 물어보기">
      <ImagePlaceholder hint="슬쩍 물어보기 화면" width={200} height={417} style={{ borderRadius: 20, background: surface }} />
    </FlowThumb>
    <FlowThumbArrow left={1448} top={580} />
    <FlowThumb left={1528} top={370} width={220} n="5" label="메인 페이지 알림">
      <ImagePlaceholder hint="메인 페이지 알림 화면" width={200} height={417} style={{ borderRadius: 20, background: surface }} />
    </FlowThumb>
  </Slide>
);

/* ───────────────────────── 03 FE 심화 ─────────────────────────
 * 단계 페이지 뒤에 붙는 FE 상세 페이지입니다.
 * 왼쪽 휴대폰 화면의 실제 위치(FeHot)에서 오른쪽 문제와 개선 카드로 화살표(FeLink)가 이어집니다.
 * 화면 위치는 이미지 기준 비율(fx, fy: 0~1)로 적습니다.
 */

const FE_PHONE = { left: 170, top: 270, width: 278 };
/** 실제 캡처 비율 (세로 / 가로) */
const AR_NEW = 1734 / 686;
const AR_OLD = 1794 / 860;
const feX = (fx: number) => FE_PHONE.left + 10 + (FE_PHONE.width - 20) * fx;
const feY = (fy: number, ar = AR_NEW) => FE_PHONE.top + 10 + (FE_PHONE.width - 20) * ar * fy;

const FePhone = ({ src, ar = AR_NEW }: { src: string; ar?: number }) => (
  <Phone width={FE_PHONE.width} left={FE_PHONE.left} top={FE_PHONE.top}>
    <img src={src} alt="" style={{ display: 'block', width: FE_PHONE.width - 20, height: Math.round((FE_PHONE.width - 20) * ar), objectFit: 'cover', borderRadius: 26, background: surface }} />
  </Phone>
);

/** 화면 위 표시점 */
const FeHot = ({ fx, fy, ar }: { fx: number; fy: number; ar?: number }) => (
  <span
    style={{
      position: 'absolute',
      left: feX(fx) - 14,
      top: feY(fy, ar) - 14,
      width: 28,
      height: 28,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'var(--osd-accent)',
      border: '4px solid var(--osd-text)',
      boxShadow: '0 0 0 10px rgba(254,229,0,0.35)',
    }}
  />
);

/** 표시점에서 카드 왼쪽 끝까지 이어지는 화살표 */
const FeLink = ({ fx, fy, x2, y2, ar }: { fx: number; fy: number; x2: number; y2: number; ar?: number }) => {
  const x1 = feX(fx);
  const y1 = feY(fy, ar);
  const bend = Math.max(80, (x2 - x1) * 0.45);
  return (
    <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }} aria-hidden="true">
      <g fill="none" stroke="#151515" strokeWidth="3">
        <path d={`M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2 - 8} ${y2}`} strokeDasharray="7 8" />
        <path d={`M ${x2 - 20} ${y2 - 10} L ${x2 - 6} ${y2} L ${x2 - 20} ${y2 + 10}`} strokeDasharray="none" />
      </g>
    </svg>
  );
};

type Stack = 'FE' | 'BE' | 'AI' | 'CL';
/** 한 화면에 여러 스택이 관여할 때의 순서. 데이터가 흐르는 순서(만들고, 전달하고, 보여 줌)로 적습니다. */
const RELAY_CHAT: Stack[] = ['AI', 'BE', 'FE'];
const RELAY_LIST: Stack[] = ['AI', 'FE'];

/** 이 화면 안에서 스택이 이어지는 순서. 지금 페이지의 스택은 노란색입니다. */
const Relay = ({ relay, stack }: { relay: Stack[]; stack: Stack }) => {
  const now = relay.indexOf(stack);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      {relay.map((s, i) => (
        <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {i > 0 ? (
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
              <path d="M 0 8 H 18 M 12 2 L 18 8 L 12 14" fill="none" stroke={i <= now ? '#151515' : '#BBBBBB'} strokeWidth="2.5" />
            </svg>
          ) : null}
          <span
            style={{
              height: 36,
              boxSizing: 'border-box',
              padding: '0 14px',
              borderRadius: 10,
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 19,
              fontWeight: 800,
              fontFamily: 'var(--osd-font-display)',
              background: i === now ? 'var(--osd-accent)' : 'transparent',
              border: `2px solid ${i <= now ? '#151515' : '#BBBBBB'}`,
              color: i <= now ? 'var(--osd-text)' : muted,
            }}
          >
            {s}
          </span>
        </span>
      ))}
    </span>
  );
};

const StackHead = ({ step, stack, relay, eyebrow, children }: { step: string; stack: Stack; relay?: Stack[]; eyebrow?: ReactNode; children: ReactNode }) => (
  <Box left={120} top={100} width={1680}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Eyebrow>{eyebrow ?? <>흐름 A {step}</>}</Eyebrow>
      {relay ? <Relay relay={relay} stack={stack} /> : null}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 22 }}>
      <span
        style={{
          padding: '6px 18px',
          borderRadius: 14,
          background: 'var(--osd-text)',
          color: '#FFFFFF',
          fontSize: 28,
          fontWeight: 800,
          fontFamily: 'var(--osd-font-display)',
        }}
      >
        {stack}
      </span>
      <H size={56}>{children}</H>
    </div>
  </Box>
);

/** 전과 후 수치 */
const FeDelta = ({ from, to }: { from: ReactNode; to: ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, whiteSpace: 'nowrap', fontFamily: 'var(--osd-font-display)', letterSpacing: track.display }}>
    <span style={{ fontSize: 24, fontWeight: 700, color: muted }}>{from}</span>
    <span style={{ fontSize: 24, fontWeight: 800 }}>→</span>
    <span style={{ fontSize: 34, fontWeight: 800 }}>{to}</span>
  </span>
);

const ProblemTag = ({ dark }: { dark?: boolean }) => (
  <span
    style={{
      flex: 'none',
      padding: '4px 14px',
      borderRadius: 999,
      background: dark ? 'var(--osd-accent)' : 'var(--osd-text)',
      color: dark ? 'var(--osd-text)' : '#FFFFFF',
      fontSize: 20,
      fontWeight: 800,
      lineHeight: 1.3,
      alignSelf: 'flex-start',
      whiteSpace: 'nowrap',
      marginTop: 3,
    }}
  >
    문제
  </span>
);

/** 개선 한 줄: 내용 + (있으면) 전과 후 수치 */
const FeGain = ({ children, delta }: { children: ReactNode; delta?: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, borderTop: `2px solid ${line}`, paddingTop: 12, minHeight: 40 }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 600, lineHeight: 1.4 }}>
      <span style={{ flex: 'none', width: 14, height: 14, borderRadius: 4, background: 'var(--osd-accent)', border: '2px solid var(--osd-text)' }} />
      {children}
    </span>
    {delta}
  </div>
);

/** 문제 하나와 그 개선을 담는 카드 */
const FeBlock = ({
  top,
  height,
  n,
  title,
  problem,
  children,
}: {
  top: number;
  height: number;
  n: string;
  title: ReactNode;
  problem: ReactNode;
  children: ReactNode;
}) => (
  <div
    style={{
      position: 'absolute',
      left: 600,
      top,
      width: 1200,
      height,
      ...card,
      border: '2.5px solid var(--osd-text)',
      boxShadow: '10px 10px 0 var(--osd-accent)',
      padding: '28px 36px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <Num n={n} dark />
      <span style={{ fontSize: 32, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ display: 'flex', gap: 14, marginTop: 16, fontSize: 23, fontWeight: 500, color: muted, lineHeight: 1.45 }}>
      <ProblemTag />
      <span>{problem}</span>
    </div>
    <div style={{ display: 'grid', gap: 12, marginTop: 'auto' }}>{children}</div>
  </div>
);

/* ── 메인 페이지 1: 폰트 ── */

const FeRow = ({ n, title, sub, delta, hot }: { n: string; title: ReactNode; sub: ReactNode; delta: ReactNode; hot?: boolean }) => (
  <div
    style={{
      height: 104,
      ...card,
      borderRadius: 28,
      border: hot ? '2.5px solid var(--osd-text)' : card.border,
      boxShadow: hot ? '8px 8px 0 var(--osd-accent)' : 'none',
      display: 'grid',
      gridTemplateColumns: '56px 1fr auto',
      alignItems: 'center',
      gap: 24,
      padding: '0 34px 0 26px',
    }}
  >
    <Num n={n} dark={hot} />
    <div>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 21, fontWeight: 500, color: muted, marginTop: 4 }}>{sub}</div>
    </div>
    {delta}
  </div>
);

const FeMainFont: Page = () => (
  <Slide>
    <StackHead step="메인 페이지" stack="FE">폰트 하나가 첫 화면의 로딩에 영향을 주는 문제가 있었습니다</StackHead>
    <FePhone src={asset2} />
    <div
      style={{
        position: 'absolute',
        left: 600,
        top: 268,
        width: 1200,
        height: 168,
        boxSizing: 'border-box',
        borderRadius: 28,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        gap: 40,
      }}
    >
      <div style={{ flex: 1, display: 'flex', gap: 14, fontSize: 24, fontWeight: 500, lineHeight: 1.5 }}>
        <ProblemTag dark />
        <span>
          헤더만 먼저 보이고 안내 문구와 상품은 한참 뒤에 나타났습니다.
          <br />
          995kB 폰트가 앱 JS보다 먼저 받아지며 대역폭의 절반을 차지했습니다.
        </span>
      </div>
      <div style={{ display: 'grid', gap: 6, textAlign: 'right' }}>
        <div style={{ fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
          안내 문구 <span style={{ fontSize: 38, fontWeight: 800, color: 'var(--osd-accent)', fontFamily: 'var(--osd-font-display)' }}>5.72초</span>
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
          상품 사진 <span style={{ fontSize: 38, fontWeight: 800, color: 'var(--osd-accent)', fontFamily: 'var(--osd-font-display)' }}>7.20초</span>
        </div>
      </div>
    </div>
    <Box left={600} top={460} width={1200} style={{ display: 'grid', gap: 16 }}>
      <FeRow n="1" title="TTF를 woff2로 변환" sub="카카오폰트 파일 용량 41% 감소" delta={<FeDelta from="995kB" to="585kB" />} />
      <FeRow hot n="2" title="폰트 CSS 분리, 비차단 로딩" sub="헤더 표시 시간, 공통 CSS 30kB → 8kB" delta={<FeDelta from="2.38초" to="1.37초" />} />
      <FeRow hot n="3" title="글자 범위별 분할 (unicode-range)" sub="안내 문구 표시 시간, 화면에 쓰인 글자 조각만 받음" delta={<FeDelta from="6.01초" to="4.37초" />} />
      <FeRow n="4" title="폰트 로더를 body 끝으로 이동" sub="앱 JS 요청이 기다리던 시간" delta={<FeDelta from="약 0.7초" to="해소" />} />
    </Box>
    <FeLink fx={0.66} fy={0.026} x2={600} y2={632} />
    <FeLink fx={0.37} fy={0.083} x2={600} y2={752} />
    <FeHot fx={0.66} fy={0.026} />
    <FeHot fx={0.37} fy={0.083} />
    <FlowBar flow="A" current={0} />
  </Slide>
);

/* ── 메인 페이지 2: GA, 상품 이미지 ── */

const FeMainLoad: Page = () => (
  <Slide>
    <StackHead step="메인 페이지" stack="FE">화면에 필요 없는 것은 뒤로 미뤘습니다</StackHead>
    <FePhone src={asset2} />
    <FeBlock
      top={268}
      height={312}
      n="1"
      title="GA 스크립트 지연 로딩"
      problem={<>폰트를 고친 뒤에도 콘텐츠가 늦었습니다. 페이지뷰만 모으는 GA 스크립트(180kB)가<br />앱 JS 대역폭의 34%를 차지해 화면 표시와 데이터 요청을 늦췄습니다.</>}
    >
      <FeGain>GA 스크립트를 페이지 로드 후에 불러오도록 변경</FeGain>
      <FeGain>초기화 코드는 먼저 실행해 페이지뷰 수집은 그대로 유지</FeGain>
    </FeBlock>
    <FeBlock
      top={610}
      height={322}
      n="2"
      title="상품 이미지 로딩 개선"
      problem={<>이미지가 CSS 배경이라 CSS를 다 받을 때까지 약 1초간 요청이 시작되지 않았고,<br />약 100px 카드에 350px 이미지를 받고 있었습니다.</>}
    >
      <FeGain delta={<FeDelta from="1.0초 대기" to="0초" />}>next/image로 바꾸고 즉시, 높은 우선순위로 요청</FeGain>
      <FeGain delta={<FeDelta from="51kB" to="29kB" />}>썸네일 요청 350px → 240px (3장 합계 −43%)</FeGain>
    </FeBlock>
    <FeLink fx={0.5} fy={0.24} x2={600} y2={771} />
    <FeHot fx={0.5} fy={0.24} />
    <FlowBar flow="A" current={0} />
  </Slide>
);

/* ── AI 채팅 ── */

const TypingDot = ({ dark }: { dark?: boolean }) => (
  <span style={{ width: 10, height: 10, borderRadius: '50%', background: dark ? 'var(--osd-text)' : '#C9C9C9', display: 'inline-block' }} />
);

const FeChat: Page = () => (
  <Slide>
    <StackHead step="AI 채팅" stack="FE" relay={RELAY_CHAT}>기계처럼 보이지 않게, 기다림은 보이게</StackHead>
    <FePhone src={screenChat1} ar={AR_OLD} />
    <div
      style={{
        position: 'absolute',
        left: feX(0.12),
        top: feY(0.67, AR_OLD),
        width: 104,
        height: 50,
        boxSizing: 'border-box',
        borderRadius: '22px 22px 22px 6px',
        background: surface,
        border: '2px solid var(--osd-text)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      <TypingDot />
      <TypingDot dark />
      <TypingDot />
    </div>
    <div
      style={{
        position: 'absolute',
        left: 600,
        top: 268,
        width: 1200,
        height: 80,
        boxSizing: 'border-box',
        borderRadius: 28,
        background: softYellow,
        padding: '0 36px',
        display: 'flex',
        alignItems: 'center',
        gap: 22,
      }}
    >
      <span style={{ padding: '4px 14px', borderRadius: 999, background: 'var(--osd-text)', color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>사용자 피드백</span>
      <span style={{ fontSize: 30, fontWeight: 800 }}>“AI 응답이 너무 빠르게 떠서 기계적으로 느껴져요”</span>
    </div>
    <FeBlock top={366} height={280} n="1" title="AI 응답 타이핑 효과" problem="AI 응답이 한 번에 화면에 떠서 기계적으로 느껴졌습니다.">
      <FeGain delta={<FeDelta from="한 번에" to="50ms 간격" />}>스트리밍(SSE) 응답을 단어 단위로 나눠 순서대로 표시</FeGain>
      <FeGain>응답 완료, 오류, 재연결 상황에서도 표시가 꼬이지 않게 상태 처리</FeGain>
    </FeBlock>
    <FeBlock top={664} height={280} n="2" title="응답 대기 중 입력 표시" problem="AI 응답을 기다리는 동안 처리 중인지 확인하기 어려웠습니다.">
      <FeGain>대기 중 “입력 중” 말풍선과 차례로 움직이는 점 애니메이션</FeGain>
      <FeGain>화면 낭독기 안내와 움직임 줄이기 설정 대응</FeGain>
    </FeBlock>
    <FeLink ar={AR_OLD} fx={0.62} fy={0.29} x2={600} y2={506} />
    <FeLink ar={AR_OLD} fx={0.52} fy={0.69} x2={600} y2={804} />
    <FeHot ar={AR_OLD} fx={0.62} fy={0.29} />
    <FeHot ar={AR_OLD} fx={0.52} fy={0.69} />
    <FlowBar flow="A" current={1} />
  </Slide>
);

/* ── 상품 목록 1: 조건 변경 ── */

const FeListQuery: Page = () => (
  <Slide>
    <StackHead step="상품 목록" stack="FE" relay={RELAY_LIST}>조건을 바꿔도 목록이 비지 않습니다</StackHead>
    <FePhone src={asset1} />
    <FeBlock
      top={268}
      height={312}
      n="1"
      title="조건 변경 시 목록 유지 (TanStack Query)"
      problem={<>카테고리나 예산을 바꿀 때마다 목록이 비었다가 다시 그려졌고(약 155ms),<br />이미 본 조건으로 돌아가도 같은 요청을 다시 보내고 기다려야 했습니다.</>}
    >
      <FeGain delta={<FeDelta from="156ms" to="0ms" />}>새 목록이 올 때까지 이전 목록을 흐리게 유지 (목록 공백)</FeGain>
      <FeGain delta={<FeDelta from="158ms" to="5ms" />}>조회 결과 캐시 (같은 조건 재방문 대기)</FeGain>
    </FeBlock>
    <FeBlock top={610} height={312} n="2" title="상품 카드 불필요한 재렌더링 제거" problem="조건을 바꿀 때마다 이미 화면에 있는 카드까지 전부 다시 렌더링되고 있었습니다.">
      <FeGain delta={<FeDelta from="195회" to="0회" />}>표시 값이 같으면 건너뛰는 memo와 비교 함수 (카드 재렌더링)</FeGain>
      <FeGain delta={<FeDelta from="19.2ms" to="6.6ms" />}>조건 5번 변경 기준 목록 렌더링 합계</FeGain>
    </FeBlock>
    <FeLink fx={0.64} fy={0.222} x2={600} y2={424} />
    <FeLink fx={0.5} fy={0.4} x2={600} y2={766} />
    <FeHot fx={0.64} fy={0.222} />
    <FeHot fx={0.5} fy={0.4} />
    <FlowBar flow="A" current={3} />
  </Slide>
);

/* ── 상품 목록 2: 로딩 화면 ── */

const FeListLoading: Page = () => (
  <Slide>
    <StackHead step="상품 목록" stack="FE" relay={RELAY_LIST}>기다리는 동안에도 화면이 반응합니다</StackHead>
    <FePhone src={asset1} />
    <FeBlock
      top={268}
      height={312}
      n="1"
      title="목록 이동, 첫 조회 스켈레톤 UI"
      problem={<>상품 목록으로 이동하면 서버 응답을 기다리는 약 1.3초 동안<br />이전 화면이 멈춰 있어서, 눌렀는지 알기 어려웠습니다.</>}
    >
      <FeGain delta={<FeDelta from="1311ms" to="27ms" />}>실제 화면과 같은 배치의 스켈레톤을 즉시 표시 (화면 반응)</FeGain>
      <FeGain delta={<FeDelta from="CLS 0.032" to="0" />}>레이아웃 이동 0건 (Lighthouse)</FeGain>
    </FeBlock>
    <FeBlock
      top={610}
      height={322}
      n="2"
      title="상품 카드 이미지 로딩 개선"
      problem={<>로딩 중에도 회색 박스만 보여 이미지가 없는 상품과 구분할 수 없었고,<br />첫 화면 이미지도 늦게 요청되고 있었습니다.</>}
    >
      <FeGain>로딩 중은 스켈레톤, 이미지가 없거나 실패하면 회색 영역으로 구분</FeGain>
      <FeGain delta={<FeDelta from="LCP 2576ms" to="2380ms" />}>첫 화면 6장은 즉시, 화면 밖 카드는 지연 로딩</FeGain>
    </FeBlock>
    <FeLink fx={0.3} fy={0.109} x2={600} y2={424} />
    <FeLink fx={0.17} fy={0.41} x2={600} y2={771} />
    <FeHot fx={0.3} fy={0.109} />
    <FeHot fx={0.17} fy={0.41} />
    <FlowBar flow="A" current={3} />
  </Slide>
);

/* ── 상품 목록 3: 가상 스크롤 ── */

const VirtualStat = ({ label, from, to, badge }: { label: string; from: string; to: string; badge?: string }) => (
  <div style={{ ...card, height: 150, padding: '22px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 23, fontWeight: 700, color: muted }}>{label}</span>
      {badge ? <span style={{ padding: '4px 14px', borderRadius: 999, background: 'var(--osd-accent)', fontSize: 22, fontWeight: 800 }}>{badge}</span> : null}
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, whiteSpace: 'nowrap' }}>
      <span style={{ fontSize: 28, fontWeight: 700, color: muted }}>{from}</span>
      <span style={{ fontSize: 28, fontWeight: 800 }}>→</span>
      <span style={{ fontSize: 56, fontWeight: 800, lineHeight: 1 }}>{to}</span>
    </div>
  </div>
);

const FeListVirtual: Page = () => (
  <Slide>
    <StackHead step="상품 목록" stack="FE" relay={RELAY_LIST}>5,000장이 쌓여도 멈추지 않습니다</StackHead>
    <FePhone src={asset1} />
    <div
      style={{
        position: 'absolute',
        left: 600,
        top: 268,
        width: 1200,
        height: 168,
        boxSizing: 'border-box',
        borderRadius: 28,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: 'flex', gap: 14 }}>
      <ProblemTag dark />
      <span>
        추천 상품은 취향 분석을 할 때마다 상한 없이 쌓이는데, 불러온 카드를 모두 DOM에 두는 구조였습니다.
        <br />
        목록이 길어지면 스크롤이 끊기고, 상세에서 돌아올 때 화면이 약 5초간 멈췄습니다.
      </span>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 600,
        top: 456,
        width: 1200,
        height: 96,
        ...card,
        borderRadius: 28,
        border: '2.5px solid var(--osd-text)',
        boxShadow: '8px 8px 0 var(--osd-accent)',
        padding: '0 34px',
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        fontSize: 27,
        fontWeight: 700,
      }}
    >
      TanStack Virtual로 화면 근처 카드만 DOM에 유지
      <span style={{ fontSize: 22, fontWeight: 500, color: muted }}>첫 화면은 서버 렌더링 유지, 5,000장 기준 측정</span>
    </div>
    <Box left={600} top={576} width={1200} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <VirtualStat label="DOM 노드" from="50,271" to="643" badge="−98.7%" />
      <VirtualStat label="메모리 (힙)" from="193MB" to="21MB" badge="−89%" />
      <VirtualStat label="스크롤 중 Long Task" from="17건" to="0건" badge="끊김 없음" />
      <VirtualStat label="뒤로 가기 복원" from="5,038ms" to="132ms" badge="38배" />
    </Box>
    <FeLink fx={0.5} fy={0.8} x2={600} y2={504} />
    <FeHot fx={0.5} fy={0.8} />
    <FlowBar flow="A" current={3} />
  </Slide>
);

/* ───────────────────────── 03 BE ─────────────────────────
 * FE와 같은 틀입니다. 사용자가 결과를 느끼는 화면 위치에서 화살표가 이어지고,
 * 위쪽 띠(PathStrip)에 그 화면 뒤에서 데이터가 지나가는 경로를 보여 줍니다. 바꾼 구간만 노란색입니다.
 */


const PathNode = ({ children, hi }: { children: ReactNode; hi?: boolean }) => (
  <span
    style={{
      height: 56,
      boxSizing: 'border-box',
      padding: '0 20px',
      borderRadius: 16,
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 21,
      fontWeight: 800,
      whiteSpace: 'nowrap',
      background: hi ? 'var(--osd-accent)' : surface,
      border: '2px solid var(--osd-text)',
    }}
  >
    {children}
  </span>
);

const PathArrow = () => (
  <svg width="30" height="20" viewBox="0 0 30 20" aria-hidden="true">
    <path d="M 2 10 H 26 M 18 3 L 26 10 L 18 17" fill="none" stroke="#151515" strokeWidth="2.5" />
  </svg>
);

const PathStrip = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 600,
      top: 268,
      width: 1200,
      height: 84,
      boxSizing: 'border-box',
      borderRadius: 24,
      background: 'rgba(21,21,21,0.05)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <span style={{ fontSize: 20, fontWeight: 800, color: muted, marginRight: 8, whiteSpace: 'nowrap' }}>화면 뒤</span>
    {children}
  </div>
);

const Plain = ({ children }: { children: ReactNode }) => (
  <span style={{ fontSize: 26, fontWeight: 800, whiteSpace: 'nowrap', fontFamily: 'var(--osd-font-display)' }}>{children}</span>
);

const BeChat: Page = () => (
  <Slide>
    <StackHead step="AI 채팅" stack="BE" relay={RELAY_CHAT}>이 답변이 도착하기까지</StackHead>
    <FePhone src={screenChat1} ar={AR_OLD} />
    <PathStrip>
      <PathNode>메시지</PathNode>
      <PathArrow />
      <PathNode hi>DB 작업 원본</PathNode>
      <PathArrow />
      <PathNode hi>Redis Streams</PathNode>
      <PathArrow />
      <PathNode hi>워커</PathNode>
      <PathArrow />
      <PathNode hi>연결별 큐</PathNode>
      <PathArrow />
      <PathNode>SSE 답변</PathNode>
    </PathStrip>
    <FeBlock top={368} height={280} n="1" title="Redis Streams 작업 큐 도입" problem="답변 작업이 서버 메모리에만 있어서, 서버 장애가 나면 AI 답변이 그대로 사라졌습니다.">
      <FeGain delta={<FeDelta from="548건" to="0건" />}>작업 원본은 DB에, 처리는 Redis Streams 워커가 (완전 유실)</FeGain>
      <FeGain delta={<Plain>중복 0건</Plain>}>하트비트, 펜싱 토큰으로 재처리 권한 관리</FeGain>
    </FeBlock>
    <FeBlock top={664} height={280} n="2" title="SSE 답변 순서 보장, 느린 연결 격리" problem="소켓 쓰기가 끝날 때까지 전송이 멈춰서, 느린 연결 하나 때문에 다른 연결까지 기다렸습니다.">
      <FeGain delta={<Plain>순서 보장</Plain>}>수신과 쓰기를 분리하고, 연결별 큐와 가상 스레드로 순차 전송</FeGain>
      <FeGain delta={<Plain>연결 간 격리</Plain>}>느린 연결은 그 연결만 늦어짐</FeGain>
    </FeBlock>
    <FeLink ar={AR_OLD} fx={0.62} fy={0.29} x2={600} y2={508} />
    <FeLink ar={AR_OLD} fx={0.62} fy={0.57} x2={600} y2={804} />
    <FeHot ar={AR_OLD} fx={0.62} fy={0.29} />
    <FeHot ar={AR_OLD} fx={0.62} fy={0.57} />
    <FlowBar flow="A" current={1} />
  </Slide>
);

const BeBatch: Page = () => (
  <Slide>
    <StackHead step="메인 페이지 알림" stack="BE">이 알림 한 줄이 만들어지기까지</StackHead>
    <FePhone src={asset4} />
    <PathStrip>
      <PathNode>생일 배치 시작</PathNode>
      <PathArrow />
      <PathNode hi>Reader 대상 조회</PathNode>
      <PathArrow />
      <PathNode hi>친구 관계 조회</PathNode>
      <PathArrow />
      <PathNode hi>Writer 알림 저장</PathNode>
      <PathArrow />
      <PathNode>알림 목록</PathNode>
    </PathStrip>
    <FeBlock
      top={368}
      height={410}
      n="1"
      title="알림 생성 배치 최적화"
      problem={<>대상을 한 번에 조회해 메모리가 1980MB까지 오르고 STW가 15.3초 발생했습니다.<br />Full Scan과 Lookup이 반복됐고, 건마다 INSERT해서 생성에만 307초가 걸렸습니다.</>}
    >
      <FeGain delta={<FeDelta from="1980MB" to="900MB" />}>Reader를 커서 기반 chunk 조회로 (메모리)</FeGain>
      <FeGain delta={<FeDelta from="17초" to="6.7초" />}>생일 가상 컬럼 복합 인덱스, 친구 커버링 인덱스 (조회)</FeGain>
      <FeGain delta={<FeDelta from="307초" to="61초" />}>JdbcTemplate Batch Insert, DB와 네트워크 I/O −93% (알림 생성)</FeGain>
    </FeBlock>
    <Box left={600} top={798} width={1200} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <VirtualStat label="STW" from="15.3초" to="5.3초" badge="−65%" />
      <VirtualStat label="검사 행" from="2,700만" to="603만" badge="−78%" />
    </Box>
    <FeLink fx={0.45} fy={0.19} x2={600} y2={573} />
    <FeHot fx={0.45} fy={0.19} />
    <FlowBar flow="A" current={6} />
  </Slide>
);

const BePush: Page = () => (
  <Slide>
    <StackHead step="메인 페이지 알림" stack="BE">이 알림이 빠짐없이 도착하기까지</StackHead>
    <FePhone src={asset4} />
    <PathStrip>
      <PathNode>알림 생성</PathNode>
      <PathArrow />
      <PathNode hi>DB 태스크큐</PathNode>
      <PathArrow />
      <PathNode hi>워커 인스턴스 여러 대</PathNode>
      <PathArrow />
      <PathNode hi>Virtual Thread, Semaphore</PathNode>
      <PathArrow />
      <PathNode>웹푸시</PathNode>
    </PathStrip>
    <FeBlock
      top={368}
      height={410}
      n="2"
      title="알림 발송 안정화"
      problem={<>웹푸시 89만 건을 배치 서버의 스레드풀로 처리했는데, 용량을 넘으면서<br />196건이 거부되고 유실됐습니다. 15분 내 발송률은 약 8%에 그쳤습니다.</>}
    >
      <FeGain delta={<FeDelta from="196건" to="0건" />}>DB 태스크큐로 생성과 발행을 한 트랜잭션에 (작업 거부)</FeGain>
      <FeGain>여러 워커 인스턴스가 큐의 작업을 나눠 처리</FeGain>
      <FeGain delta={<FeDelta from="37~74건" to="약 600건" />}>워커별 동시 요청 수를 제한한 병렬 처리 (초당 처리량)</FeGain>
    </FeBlock>
    <Box left={600} top={798} width={1200}>
      <VirtualStat label="15분 내 발송률" from="약 8%" to="약 80%" />
    </Box>
    <FeLink fx={0.07} fy={0.026} x2={600} y2={573} />
    <FeHot fx={0.07} fy={0.026} />
    <FlowBar flow="A" current={6} />
  </Slide>
);

/* ───────────────────────── 03 AI ─────────────────────────
 * FE, BE와 같은 틀입니다. 화면의 실제 위치에서 화살표가 문제와 개선 카드로 이어집니다.
 * 한 화면에 여러 스택이 관여하면 데이터가 흐르는 순서(AI가 만들고, BE가 전달하고, FE가 보여 줌)로 페이지를 잇습니다.
 */

/** 스크린샷 2026-11-12 21.29.08 (취향 분석 결과) 비율 */
const AR_TASTE = 1536 / 692;

/** 어두운 문제 띠 */
const ProblemBand = ({ top, height, children }: { top: number; height: number; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 600,
      top,
      width: 1200,
      height,
      boxSizing: 'border-box',
      borderRadius: 28,
      background: 'var(--osd-text)',
      color: '#FFFFFF',
      padding: '0 40px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', gap: 14, fontSize: 24, fontWeight: 500, lineHeight: 1.5 }}>
      <ProblemTag dark />
      <span>{children}</span>
    </div>
  </div>
);

/** 검은 테두리와 노란 그림자 카드 (FeBlock과 같은 모양, 내용은 자유) */
const HotCard = ({ top, height, children }: { top: number; height: number; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 600,
      top,
      width: 1200,
      height,
      ...card,
      border: '2.5px solid var(--osd-text)',
      boxShadow: '10px 10px 0 var(--osd-accent)',
      padding: '28px 36px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </div>
);

const CardTitle = ({ n, children, note }: { n: string; children: ReactNode; note?: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
    <Num n={n} dark />
    <span style={{ fontSize: 32, fontWeight: 800 }}>{children}</span>
    {note ? <span style={{ marginLeft: 'auto', fontSize: 21, fontWeight: 600, color: muted }}>{note}</span> : null}
  </div>
);

/** 작은 알약 라벨 */
const AiChip = ({ children, hi, dashed }: { children: ReactNode; hi?: boolean; dashed?: boolean }) => (
  <span
    style={{
      height: 40,
      boxSizing: 'border-box',
      padding: '0 14px',
      borderRadius: 12,
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 21,
      fontWeight: 700,
      whiteSpace: 'nowrap',
      background: hi ? 'var(--osd-accent)' : surface,
      border: hi ? '2px solid var(--osd-text)' : `2px ${dashed ? 'dashed' : 'solid'} ${dashed ? '#BBBBBB' : line}`,
    }}
  >
    {children}
  </span>
);

const DownArrow = () => (
  <svg width="24" height="26" viewBox="0 0 24 26" aria-hidden="true">
    <path d="M 12 2 V 22 M 4 14 L 12 22 L 20 14" fill="none" stroke="#151515" strokeWidth="2.5" />
  </svg>
);

/* ── AI 채팅 1: 대화 흐름 제어 ── */

const ReactRule = ({ when, then }: { when: ReactNode; then: ReactNode }) => (
  <div style={{ ...card, padding: '22px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
    <span style={{ fontSize: 29, fontWeight: 800, whiteSpace: 'nowrap' }}>{when}</span>
    <DownArrow />
    <span style={{ padding: '7px 16px', borderRadius: 14, background: 'var(--osd-accent)', border: '2px solid var(--osd-text)', fontSize: 24, fontWeight: 800, whiteSpace: 'nowrap' }}>{then}</span>
  </div>
);

const AiChatFlow: Page = () => (
  <Slide>
    <StackHead step="AI 채팅" stack="AI" relay={RELAY_CHAT}>이 질문이 나오기까지</StackHead>
    <FePhone src={screenChat2} ar={AR_OLD} />
    <PathStrip>
      <PathNode>사용자 답변</PathNode>
      <PathArrow />
      <PathNode hi>참여도 계산</PathNode>
      <PathArrow />
      <PathNode hi>반응 결정 (코드)</PathNode>
      <PathArrow />
      <PathNode>문장 생성 (모델)</PathNode>
    </PathStrip>
    <FeBlock
      top={368}
      height={300}
      n="1"
      title="대화 흐름 제어를 코드와 프롬프트로 나눔"
      problem={<>대화 방향까지 프롬프트에 맡기니 모델이 프로필의 빈 항목을 채우려고 설문처럼 질문했고,<br />사용자가 지쳐서 짧게 답해도 같은 화제를 계속 물었습니다.</>}
    >
      <FeGain>그 사람 평균 대비 답 길이, 웃음과 감탄, 되묻기, 회피 표현으로 매 턴 참여도 계산</FeGain>
      <FeGain>추천에 필요한 취향 수는 종료 시점과 진행률에만 쓰고, 다음 질문을 고르는 데는 쓰지 않음</FeGain>
    </FeBlock>
    <Box left={600} top={690} width={1200}>
      <div style={{ fontSize: 26, fontWeight: 800 }}>반응 방식은 코드가 정합니다</div>
    </Box>
    <Box left={600} top={736} width={1200} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
      <ReactRule when="“모르겠어요”" then="선택지를 줌" />
      <ReactRule when="거절" then="화제를 바꿈" />
      <ReactRule when="에너지가 계속 낮음" then="가볍게 전환, 마무리" />
    </Box>
    <FeLink ar={AR_OLD} fx={0.45} fy={0.115} x2={600} y2={518} />
    <FeLink ar={AR_OLD} fx={0.8} fy={0.71} x2={600} y2={840} />
    <FeHot ar={AR_OLD} fx={0.45} fy={0.115} />
    <FeHot ar={AR_OLD} fx={0.8} fy={0.71} />
    <FlowBar flow="A" current={1} />
  </Slide>
);

/* ── AI 채팅 2: 프롬프트 구조 ── */

const PromptLayer = ({ name, sub, children }: { name: string; sub: string; children: ReactNode }) => (
  <div style={{ flex: 1, minWidth: 0, ...card, borderRadius: 24, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 6 }}>
    <span style={{ fontSize: 26, fontWeight: 800 }}>{name}</span>
    <span style={{ fontSize: 19, fontWeight: 600, color: muted }}>{sub}</span>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14 }}>{children}</div>
  </div>
);

const PlusSign = () => <span style={{ flex: 'none', fontSize: 34, fontWeight: 800, fontFamily: 'var(--osd-font-display)' }}>+</span>;

const AiChatPrompt: Page = () => (
  <Slide>
    <StackHead step="AI 채팅" stack="AI" relay={RELAY_CHAT}>이 말투가 만들어지기까지</StackHead>
    <FePhone src={screenChat1} ar={AR_OLD} />
    <ProblemBand top={268} height={150}>
      턴마다 붙인 지시 메모를 모델이 대사처럼 따라 해 “~군요. ~해요?” 패턴으로 굳었고,
      <br />
      예시 문장을 그대로 옮겨 쓰기도 했습니다.
    </ProblemBand>
    <HotCard top={444} height={500}>
      <CardTitle n="2">프롬프트 구조 재설계</CardTitle>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, marginTop: 22, height: 236 }}>
        <PromptLayer name="고정 지침" sub="항상 들어감">
          <AiChip>듣기</AiChip>
          <AiChip>질문</AiChip>
          <AiChip>화제</AiChip>
          <AiChip>말투</AiChip>
          <AiChip>안전</AiChip>
        </PromptLayer>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <PlusSign />
        </span>
        <PromptLayer name="참고 자료" sub="지침과 분리">
          <AiChip>들은 취향</AiChip>
          <AiChip>지난 대화 기억</AiChip>
          <AiChip>오늘 날짜</AiChip>
        </PromptLayer>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <PlusSign />
        </span>
        <PromptLayer name="턴 메모" sub="필요한 턴에만">
          <AiChip dashed>공통 지침으로 부족할 때</AiChip>
        </PromptLayer>
      </div>
      <div style={{ display: 'grid', gap: 12, marginTop: 'auto' }}>
        <FeGain>예시 대화를 없애고 지시문을 일상말로 바꿔, 모델이 문구를 그대로 옮겨 쓰지 않게 함</FeGain>
        <FeGain>첫인사는 20개 생활 영역에서 소재를 고르고, 다시 온 사용자는 지난 대화 기억으로 첫 질문</FeGain>
      </div>
    </HotCard>
    <FeLink ar={AR_OLD} fx={0.55} fy={0.29} x2={600} y2={343} />
    <FeLink ar={AR_OLD} fx={0.55} fy={0.56} x2={600} y2={700} />
    <FeHot ar={AR_OLD} fx={0.55} fy={0.29} />
    <FeHot ar={AR_OLD} fx={0.55} fy={0.56} />
    <FlowBar flow="A" current={1} />
  </Slide>
);

/* ── 취향 분석 1: 추출과 판단 분리 ── */

const PipeCard = ({ role, title, sub, hi }: { role: string; title: ReactNode; sub?: ReactNode; hi?: boolean }) => (
  <div
    style={{
      width: 270,
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: 24,
      padding: '22px 22px',
      background: hi ? 'var(--osd-accent)' : surface,
      border: hi ? '2.5px solid var(--osd-text)' : `2px solid ${line}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <span style={{ fontSize: 19, fontWeight: 700, color: hi ? 'var(--osd-text)' : muted, whiteSpace: 'nowrap' }}>{role}</span>
    <span style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.3 }}>{title}</span>
    {sub ? <span style={{ fontSize: 20, fontWeight: 500, color: hi ? 'var(--osd-text)' : muted, lineHeight: 1.45, marginTop: 'auto' }}>{sub}</span> : null}
  </div>
);

const AiTasteExtract: Page = () => (
  <Slide>
    <StackHead step="취향 분석" stack="AI">이 취향 한 줄이 저장되기까지</StackHead>
    <FePhone src={asset20261112212908} ar={AR_TASTE} />
    <ProblemBand top={268} height={130}>
      추출 모델이 프로필 항목까지 고르면,
      <br />
      “러닝은 싫어요”의 러닝이 관심사로 들어가는 오류를 막을 수 없었습니다.
    </ProblemBand>
    <Box left={600} top={424} width={1200} style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <PipeCard role="사용자 발화" title="“러닝은 싫어요”" />
      <PathArrow />
      <PipeCard role="추출 모델" title="후보 “러닝”" sub="취향 후보와 그 상황, 이유만 뽑음" />
      <PathArrow />
      <PipeCard role="판단 모델 (TypeSafe Jev)" title="태도 “싫어함”" sub="태도와 취향 단서 여부를 확률로 판단" />
      <PathArrow />
      <PipeCard hi role="코드" title="비선호에 저장" sub="관심사에는 들어가지 않음" />
    </Box>
    <HotCard top={690} height={254}>
      <div style={{ fontSize: 22, fontWeight: 700, color: muted }}>판단 모델이 고르는 태도</div>
      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <AiChip>좋아함</AiChip>
        <AiChip>싫어함</AiChip>
        <AiChip>갖고 싶음</AiChip>
        <AiChip>가짐</AiChip>
        <AiChip>못 씀</AiChip>
        <AiChip>언급만</AiChip>
        <AiChip>다른 사람 이야기</AiChip>
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: muted, marginTop: 'auto' }}>저장할 항목은 코드가 결정</div>
      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <AiChip hi>싫어함 → 비선호</AiChip>
        <AiChip hi>못 씀 → 제약</AiChip>
        <AiChip hi>날씨, 남의 취향, 낮은 확신 → 저장 안 함</AiChip>
      </div>
    </HotCard>
    <FeLink ar={AR_TASTE} fx={0.25} fy={0.455} x2={600} y2={544} />
    <FeHot ar={AR_TASTE} fx={0.25} fy={0.455} />
    <FlowBar flow="A" current={2} />
  </Slide>
);

/* ── 취향 분석 2: 정정과 충돌 ── */

const GuardRow = ({ top, n, title, children }: { top: number; n: string; title: ReactNode; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 600,
      top,
      width: 1200,
      height: 150,
      ...card,
      borderRadius: 28,
      border: '2.5px solid var(--osd-text)',
      boxShadow: '8px 8px 0 var(--osd-accent)',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 36px 0 30px',
    }}
  >
    <Num n={n} dark />
    <div>
      <div style={{ fontSize: 30, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 500, color: muted, marginTop: 6, lineHeight: 1.45 }}>{children}</div>
    </div>
  </div>
);

const AiTasteFix: Page = () => (
  <Slide>
    <StackHead step="취향 분석" stack="AI">고친 말은 고친 대로 남습니다</StackHead>
    <FePhone src={asset20261112212908} ar={AR_TASTE} />
    <ProblemBand top={268} height={150}>
      사용자가 “그거 아니에요”라고 고쳐도 기존 값이 남았고,
      <br />
      같은 대상이 선호와 비선호에 동시에 남을 수 있었습니다.
    </ProblemBand>
    <GuardRow top={446} n="1" title="정정은 두 판단을 모두 넘을 때만 반영">
      정정하려는 의도와 항목별 취소 판단이 둘 다 기준을 넘어야 반영
      <br />
      추천 제외에 쓰이는 비선호와 제약은 더 높은 기준 적용
    </GuardRow>
    <GuardRow top={618} n="2" title="같은 대상은 한쪽에만">
      같은 대상은 선호와 비선호 중 한쪽에만 남김
    </GuardRow>
    <GuardRow top={790} n="3" title="근거 문장 확인">
      근거 문장이 실제 사용자 발화에 있는지 확인해, 모델이 지어낸 취향을 차단
    </GuardRow>
    <FeLink ar={AR_TASTE} fx={0.25} fy={0.307} x2={600} y2={521} />
    <FeLink ar={AR_TASTE} fx={0.58} fy={0.7} x2={600} y2={865} />
    <FeHot ar={AR_TASTE} fx={0.25} fy={0.307} />
    <FeHot ar={AR_TASTE} fx={0.58} fy={0.7} />
    <FlowBar flow="A" current={2} />
  </Slide>
);

/* ── 상품 목록 1: 검색 의도 ── */

const QueryPanel = ({ label, hi, result, strike, children }: { label: string; hi?: boolean; result: string; strike?: boolean; children: ReactNode }) => (
  <div
    style={{
      ...card,
      borderRadius: 28,
      border: hi ? '2.5px solid var(--osd-text)' : card.border,
      boxShadow: hi ? '8px 8px 0 var(--osd-accent)' : 'none',
      padding: '24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}
  >
    <span style={{ fontSize: 21, fontWeight: 700, color: muted }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 44 }}>{children}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
      <span style={{ fontSize: 21, fontWeight: 700, color: muted }}>검색 결과</span>
      <PathArrow />
      <span
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: strike ? muted : 'var(--osd-text)',
          textDecoration: strike ? 'line-through' : 'none',
        }}
      >
        {result}
      </span>
    </div>
  </div>
);

const AiListIntent: Page = () => (
  <Slide>
    <StackHead step="상품 목록" stack="AI" relay={RELAY_LIST}>이 상품이 검색되기까지</StackHead>
    <FePhone src={asset1} />
    <FeBlock
      top={268}
      height={410}
      n="1"
      title="관심사별 검색 의도 생성"
      problem={<>“{'{관심사}'} 관련 제품” 같은 템플릿 쿼리는 상품 문서와 문장 모양이 달라<br />엉뚱한 상품이 검색됐습니다.</>}
    >
      <FeGain>관심사마다 상품 종류, 진열 카테고리, 검색 문장을 LLM이 미리 생성 (카테고리는 목록에서 선택)</FeGain>
      <FeGain delta={<Plain>LLM 대기 없음</Plain>}>대화 중 백그라운드로 생성해 캐시, 추천 요청 때는 캐시만 읽음</FeGain>
      <FeGain>상품 문서를 상품 설명, 사용 상황, 선물 관점으로 나눠 임베딩하고 관점별로 검색</FeGain>
    </FeBlock>
    <Box left={600} top={704} width={1200} style={{ height: 240, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <QueryPanel label="이전 템플릿 쿼리" result="허브티" strike>
        <span style={{ fontSize: 30, fontWeight: 800 }}>“와인 관련 제품”</span>
      </QueryPanel>
      <QueryPanel hi label="이후 LLM이 만든 검색 의도" result="와인잔">
        <AiChip>상품 종류</AiChip>
        <AiChip>진열 카테고리</AiChip>
        <AiChip>검색 문장</AiChip>
      </QueryPanel>
    </Box>
    <FeLink fx={0.42} fy={0.3} x2={600} y2={473} />
    <FeLink fx={0.5} fy={0.42} x2={600} y2={824} />
    <FeHot fx={0.42} fy={0.3} />
    <FeHot fx={0.5} fy={0.42} />
    <FlowBar flow="A" current={3} />
  </Slide>
);

/* ── 상품 목록 2: 카탈로그에 없는 관심사 ── */

/** 유사도 축: 0.54 ~ 0.78 을 1128px에 */
const simX = (v: number) => Math.round(((v - 0.54) / 0.24) * 1128);

const SimRange = ({ top, from, to, label, hi }: { top: number; from: number; to: number; label: string; hi?: boolean }) => (
  <>
    <span style={{ position: 'absolute', left: simX(from), top, fontSize: 20, fontWeight: 700, color: muted, whiteSpace: 'nowrap' }}>{label}</span>
    <span
      style={{
        position: 'absolute',
        left: simX(from),
        top: top + 30,
        width: simX(to) - simX(from),
        height: 40,
        boxSizing: 'border-box',
        borderRadius: 12,
        background: hi ? 'var(--osd-accent)' : '#E4E1D6',
        border: hi ? '2px solid var(--osd-text)' : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 21,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        whiteSpace: 'nowrap',
      }}
    >
      {from.toFixed(2)} ~ {to.toFixed(2)}
    </span>
  </>
);

const AiListFallback: Page = () => (
  <Slide>
    <StackHead step="상품 목록" stack="AI" relay={RELAY_LIST}>카탈로그에 없는 관심사라면</StackHead>
    <FePhone src={asset1} />
    <ProblemBand top={268} height={130}>
      볼링, 스키, 뜨개질처럼 카탈로그에 상품이 없는 관심사는
      <br />
      골프 장갑 같은 무관한 상품이 추천됐습니다.
    </ProblemBand>
    <HotCard top={424} height={322}>
      <CardTitle n="2" note="관심사별 1위 유사도 측정">카탈로그에 없는 관심사 대체</CardTitle>
      <div style={{ position: 'relative', height: 190, marginTop: 18 }}>
        <svg width="1128" height="190" style={{ position: 'absolute', left: 0, top: 0 }} aria-hidden="true">
          <line x1={simX(0.62)} y1={34} x2={simX(0.62)} y2={186} stroke="#151515" strokeWidth="2.5" strokeDasharray="7 7" />
        </svg>
        <span style={{ position: 'absolute', left: simX(0.62) + 14, top: 0, fontSize: 21, fontWeight: 800, whiteSpace: 'nowrap' }}>0.62 미만이면 상품 없음으로 판정</span>
        <SimRange top={44} from={0.56} to={0.62} label="상품이 없는 관심사" />
        <SimRange hi top={116} from={0.63} to={0.76} label="상품이 있는 관심사" />
      </div>
    </HotCard>
    <Box left={600} top={770} width={1200} style={{ height: 174, ...card, borderRadius: 28, padding: '24px 36px', display: 'grid', gap: 12, alignContent: 'center' }}>
      <FeGain delta={<FeDelta from="볼링" to="보드게임, 실내 놀이" />}>판정된 관심사는 결과를 버리고, 같은 즐거움으로 넓힌 쿼리로 대체</FeGain>
      <FeGain>탐색 상품은 관심사당 2개, 목록당 4개까지만 넣어 원래 추천을 덮지 않게 함</FeGain>
    </Box>
    <FeLink fx={0.5} fy={0.62} x2={600} y2={857} />
    <FeLink fx={0.83} fy={0.42} x2={600} y2={585} />
    <FeHot fx={0.5} fy={0.62} />
    <FeHot fx={0.83} fy={0.42} />
    <FlowBar flow="A" current={3} />
  </Slide>
);

/* ───────────────────────── 03 CL 트래픽을 버티는 방법 ─────────────────────────
 * 흐름 A, B가 끝난 뒤 클라우드 고도화를 보여 줍니다. 화면 대신 구조와 수치로 보여 주고,
 * 아래 막대(InfraBar)는 흐름 막대와 같은 모양으로 지금 주제를 표시합니다.
 * 발표 시 상태(설계, 일부 구성 확인, 예정)와 한계는 문서 그대로 함께 적습니다.
 */

const INFRA_PARTS = ['AI 대화', '데이터 이전 V1 → V2'];

const InfraHead = ({ part, children }: { part: string; children: ReactNode }) => (
  <StackHead step="" stack="CL" eyebrow={<>트래픽을 버티는 방법 {part}</>}>
    {children}
  </StackHead>
);

/** 화면 아래 주제 막대 + (있으면) 오른쪽 상태 표시 */
const InfraBar = ({ current, children }: { current: number; children?: ReactNode }) => (
  <div style={{ position: 'absolute', left: 120, top: 966, width: 1680, display: 'flex', alignItems: 'center', gap: 10 }}>
    <span
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 19,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        marginRight: 8,
      }}
    >
      CL
    </span>
    {INFRA_PARTS.map((s, i) => (
      <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        {i > 0 ? (
          <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
            <path d="M 0 8 H 18 M 12 2 L 18 8 L 12 14" fill="none" stroke={i <= current ? '#151515' : '#BBBBBB'} strokeWidth="2.5" />
          </svg>
        ) : null}
        <span
          style={{
            height: 46,
            boxSizing: 'border-box',
            padding: '0 18px',
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 22,
            fontWeight: i === current ? 800 : 700,
            whiteSpace: 'nowrap',
            background: i === current ? 'var(--osd-accent)' : 'transparent',
            border: i === current ? '2px solid var(--osd-text)' : `2px solid ${i < current ? '#151515' : line}`,
            color: i <= current ? 'var(--osd-text)' : muted,
          }}
        >
          {s}
        </span>
      </span>
    ))}
    {children ? <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 22 }}>{children}</span> : null}
  </div>
);

/** 발표 시 상태 */
const Status = ({ level, children }: { level: '설계' | '일부 구성 확인' | '예정' | '한계'; children: ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 600, whiteSpace: 'nowrap' }}>
    <span
      style={{
        height: 34,
        boxSizing: 'border-box',
        padding: '0 12px',
        borderRadius: 10,
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 800,
        background: level === '일부 구성 확인' ? 'var(--osd-accent)' : level === '한계' ? 'var(--osd-text)' : surface,
        color: level === '한계' ? '#FFFFFF' : 'var(--osd-text)',
        border: level === '예정' ? '2px dashed #BBBBBB' : '2px solid var(--osd-text)',
      }}
    >
      {level}
    </span>
    {children}
  </span>
);

/** 전체 너비 문제 띠 */
const WideProblem = ({ top, height, children }: { top: number; height: number; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      top,
      width: 1680,
      height,
      boxSizing: 'border-box',
      borderRadius: 28,
      background: 'var(--osd-text)',
      color: '#FFFFFF',
      padding: '0 40px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', gap: 14, fontSize: 24, fontWeight: 500, lineHeight: 1.5 }}>
      <ProblemTag dark />
      <span>{children}</span>
    </div>
  </div>
);

/** 노란 결과 띠 */
const ResultBand = ({ left, top, width, height, children }: { left: number; top: number; width: number; height: number; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width,
      height,
      boxSizing: 'border-box',
      borderRadius: 28,
      background: 'var(--osd-accent)',
      border: '2.5px solid var(--osd-text)',
      padding: '0 36px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      fontSize: 27,
      fontWeight: 800,
      lineHeight: 1.4,
    }}
  >
    {children}
  </div>
);

/* ── 다리 페이지 ── */

const TrafficCard = ({ left, n, part, title, children, tags }: { left: number; n: string; part: string; title: string; children: ReactNode; tags: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top: 420,
      width: 810,
      height: 460,
      ...card,
      border: '2.5px solid var(--osd-text)',
      boxShadow: '12px 12px 0 var(--osd-accent)',
      padding: '40px 44px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <Num n={n} dark />
      <span style={{ fontSize: 26, fontWeight: 700, color: muted }}>{part}</span>
    </div>
    <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: track.display, fontFamily: 'var(--osd-font-display)', marginTop: 28 }}>{title}</div>
    <div style={{ fontSize: 27, fontWeight: 500, color: muted, lineHeight: 1.55, marginTop: 20 }}>{children}</div>
    <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>{tags}</div>
  </div>
);

const TrafficIntro: Page = () => (
  <Slide>
    <Head chapter="03 프로젝트 수행 경과" width={1400}>니쥬가 사용자 트래픽을 버티는 방법</Head>
    <Box left={120} top={270} width={1400}>
      <P>흐름 속 화면 뒤의 서버를 클라우드에서 어떻게 나누고, 어떻게 옮겼는지입니다.</P>
    </Box>
    <img src={mascot} alt="" style={{ position: 'absolute', left: 1590, top: 70, width: 220, rotate: '8deg' }} />
    <TrafficCard
      left={120}
      n="1"
      part="AI 대화"
      title="몰려도 번지지 않게"
      tags={
        <>
          <AiChip hi>실행 Pool 분리</AiChip>
          <AiChip hi>Valkey A/B 분리</AiChip>
        </>
      }
    >
      AI 요청, 작업 소비, 모델 호출을 따로 실행하고
      <br />
      큐는 로그인과 일반 요청과 다른 저장소에 둡니다.
    </TrafficCard>
    <TrafficCard
      left={990}
      n="2"
      part="데이터 이전 V1 → V2"
      title="멈추는 시간은 짧게"
      tags={
        <>
          <AiChip hi>Cutover 제한 시간 단축</AiChip>
          <AiChip hi>GitHub Actions 검증</AiChip>
        </>
      }
    >
      DNS 대신 ALB 가중치로 전환하고
      <br />
      쓰기 제한을 46분 35초 이상에서 102초로 줄였습니다.
    </TrafficCard>
  </Slide>
);

/* ── ① AI 대화 1: 실행 Pool 분리 ── */

const PoolRule = ({ label, children }: { label: string; children: ReactNode }) => (
  <div style={{ borderTop: `2px solid ${line}`, paddingTop: 12 }}>
    <div style={{ fontSize: 19, fontWeight: 700, color: muted }}>{label}</div>
    <div style={{ fontSize: 26, fontWeight: 800, marginTop: 4, whiteSpace: 'nowrap' }}>{children}</div>
  </div>
);

const PoolCard = ({ left, name, role, children }: { left: number; name: string; role: string; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top: 410,
      width: 480,
      height: 380,
      ...card,
      border: '2.5px solid var(--osd-text)',
      boxShadow: '10px 10px 0 var(--osd-accent)',
      padding: '30px 34px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <span style={{ fontSize: 38, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display }}>{name}</span>
    <span style={{ fontSize: 22, fontWeight: 600, color: muted, marginTop: 6 }}>{role}</span>
    <div style={{ display: 'grid', gap: 14, marginTop: 'auto' }}>{children}</div>
  </div>
);

const PoolArrow = ({ left, label }: { left: number; label: string }) => (
  <div style={{ position: 'absolute', left, top: 560, width: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <span style={{ fontSize: 18, fontWeight: 800, color: muted, whiteSpace: 'nowrap' }}>{label}</span>
    <svg width="80" height="22" viewBox="0 0 80 22" aria-hidden="true">
      <path d="M 2 11 H 74 M 64 3 L 74 11 L 64 19" fill="none" stroke="#151515" strokeWidth="3" />
    </svg>
  </div>
);

const ClPools: Page = () => (
  <Slide>
    <InfraHead part="① AI 대화">같은 이미지, 다른 실행 Pool</InfraHead>
    <WideProblem top={268} height={110}>
      SSE 연결, AI 작업 소비, 모델 호출을 같은 Backend Pool에서 처리하면 장애와 적체, 확장 범위가 함께 묶입니다.
    </WideProblem>
    <PoolCard left={120} name="ai-api" role="AI 요청과 SSE 연결">
      <PoolRule label="확장 기준">CPU HPA</PoolRule>
      <PoolRule label="초기 Replica">3~6</PoolRule>
    </PoolCard>
    <PoolArrow left={600} label="Stream" />
    <PoolCard left={720} name="ai-worker" role="AI 작업 소비">
      <PoolRule label="확장 기준">KEDA Stream Lag (CPU 아님)</PoolRule>
      <PoolRule label="초기 Replica">2~4</PoolRule>
    </PoolCard>
    <PoolArrow left={1200} label="내부 호출" />
    <PoolCard left={1320} name="ai-fastapi" role="모델 호출">
      <PoolRule label="확장 기준">호출량, 응답시간</PoolRule>
      <PoolRule label="노출">내부 ClusterIP만</PoolRule>
    </PoolCard>
    <Box left={120} top={822} width={700} style={{ height: 110, display: 'flex', alignItems: 'center', fontSize: 23, fontWeight: 500, color: muted, lineHeight: 1.5 }}>
      Backend는 같은 Spring Image를 씁니다.
      <br />
      MSA 전환이 아니라 실행 Pool 분리입니다.
    </Box>
    <ResultBand left={840} top={822} width={960} height={110}>
      <PathArrow />
      AI 요청, 작업 소비, 모델 호출의 장애와 확장 범위 분리
    </ResultBand>
    <InfraBar current={0}>
      <Status level="설계">Deployment 분리, KEDA 2~4</Status>
      <Status level="예정">부하, 장애 테스트</Status>
    </InfraBar>
  </Slide>
);

/* ── ① AI 대화 2: Valkey A/B ── */

const ValkeyCard = ({ left, name, lane, hi, children }: { left: number; name: string; lane: string; hi?: boolean; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top: 410,
      width: 800,
      height: 330,
      ...card,
      border: '2.5px solid var(--osd-text)',
      boxShadow: hi ? '10px 10px 0 var(--osd-accent)' : 'none',
      padding: '30px 36px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <span style={{ fontSize: 22, fontWeight: 700, color: muted }}>{lane}</span>
    <span style={{ fontSize: 46, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, marginTop: 6 }}>{name}</span>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>{children}</div>
    <div style={{ fontSize: 20, fontWeight: 600, color: muted, marginTop: 18 }}>Multi-AZ, Automatic Failover</div>
  </div>
);

const SmallNote = ({ left, width, title, children }: { left: number; width: number; title: string; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top: 772,
      width,
      height: 160,
      ...card,
      borderRadius: 28,
      padding: '24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <span style={{ fontSize: 21, fontWeight: 700, color: muted }}>{title}</span>
    <span style={{ fontSize: 25, fontWeight: 700, lineHeight: 1.45 }}>{children}</span>
  </div>
);

const ClValkey: Page = () => (
  <Slide>
    <InfraHead part="① AI 대화">큐가 밀려도 로그인은 밀리지 않게</InfraHead>
    <WideProblem top={268} height={110}>
      AI Stream 적체가 OAuth, Rate Limit, 일반 사용자 요청용 Redis까지 영향을 줄 수 있었습니다.
    </WideProblem>
    <ValkeyCard left={120} name="Valkey A" lane="사용자 요청 경로">
      <AiChip>OAuth</AiChip>
      <AiChip>Rate Limit</AiChip>
      <AiChip>Cooldown</AiChip>
      <AiChip>일반 Lock</AiChip>
    </ValkeyCard>
    <div style={{ position: 'absolute', left: 940, top: 430, width: 40, height: 290, display: 'flex', justifyContent: 'center' }}>
      <span style={{ width: 0, height: '100%', borderLeft: '4px dashed var(--osd-text)' }} />
    </div>
    <ValkeyCard hi left={1000} name="Valkey B" lane="비동기 작업 경로">
      <AiChip hi>AI Stream</AiChip>
      <AiChip hi>대량 알림 Stream</AiChip>
      <AiChip hi>Consumer Group</AiChip>
      <AiChip hi>AI 대화 Lock</AiChip>
    </ValkeyCard>
    <SmallNote left={120} width={800} title="적체 관측">
      Stream Lag, Pending, 대기시간을 따로 관측하고
      <br />
      적체되면 Worker를 확장
    </SmallNote>
    <ResultBand left={1000} top={772} width={800} height={160}>
      <PathArrow />
      <span>
        Queue 부하가 로그인과 일반 요청 경로로
        <br />
        번지는 범위 축소
      </span>
    </ResultBand>
    <InfraBar current={0}>
      <Status level="설계">Valkey A/B</Status>
      <Status level="일부 구성 확인">Valkey 인프라, Worker 관측 규칙</Status>
      <Status level="예정">부하, 장애 테스트</Status>
    </InfraBar>
  </Slide>
);

/* ── ② 데이터 이전 1: Cutover 제한 시간 ── */

const CutRow = ({ top, n, title, children }: { top: number; n: string; title: ReactNode; children?: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 800,
      top,
      width: 1000,
      height: 120,
      ...card,
      borderRadius: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 32px 0 28px',
    }}
  >
    <Num n={n} dark />
    <div>
      <div style={{ fontSize: 28, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 12 }}>{title}</div>
      {children ? <div style={{ fontSize: 21, fontWeight: 500, color: muted, marginTop: 6 }}>{children}</div> : null}
    </div>
  </div>
);

const Was = ({ children }: { children: ReactNode }) => <span style={{ color: muted, fontWeight: 700 }}>{children}</span>;

const ClCutover: Page = () => (
  <Slide>
    <InfraHead part="② 데이터 이전 V1 → V2">쓰기 제한 46분을 102초로</InfraHead>
    <WideProblem top={268} height={96}>
      DNS 전환과 수동 작업 때문에 초기 쓰기 제한이 46분 이상 이어졌습니다.
    </WideProblem>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 392,
        width: 640,
        height: 540,
        ...card,
        border: '2.5px solid var(--osd-text)',
        boxShadow: '12px 12px 0 var(--osd-accent)',
        padding: '36px 44px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span style={{ fontSize: 24, fontWeight: 700, color: muted }}>쓰기 제한 시간</span>
      <span style={{ fontSize: 46, fontWeight: 800, color: muted, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, marginTop: 20 }}>46분 35초 이상</span>
      <span style={{ marginTop: 14 }}>
        <DownArrow />
      </span>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 4, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display }}>
        <span style={{ fontSize: 150, fontWeight: 800, lineHeight: 1 }}>102</span>
        <span style={{ fontSize: 48, fontWeight: 800 }}>초</span>
      </span>
      <span style={{ fontSize: 26, fontWeight: 700, marginTop: 10 }}>일반 쓰기 102초, 인증 103초</span>
      <span style={{ fontSize: 21, fontWeight: 500, color: muted, marginTop: 'auto', lineHeight: 1.5 }}>DMS CDC와 짧은 Write Gate는 유지한 채 전환 절차를 단계적으로 개선</span>
    </div>
    <CutRow top={392} n="1" title={<><Was>DNS 변경</Was><PathArrow />ALB Listener Rule Weight 전환</>} />
    <CutRow top={532} n="2" title={<><Was>Nginx Freeze</Was><PathArrow />ALB Write Gate</>} />
    <CutRow top={672} n="3" title="사전 준비">PostgreSQL 사전 적재, V2 ECS와 Target 사전 기동</CutRow>
    <CutRow top={812} n="4" title="전환 절차 자동화">DMS 중지, DB 검증, ALB 전환, Gate 해제</CutRow>
    <InfraBar current={1}>
      <Status level="한계">쓰기와 인증이 102~103초 제한됐으므로 무중단 전환은 아님</Status>
    </InfraBar>
  </Slide>
);

/* ── ② 데이터 이전 2: GitHub Actions 검증 ── */

const Evidence = ({ label, value, unit }: { label: string; value: string; unit?: string }) => (
  <div style={{ ...card, height: 150, padding: '22px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <span style={{ fontSize: 21, fontWeight: 700, color: muted, whiteSpace: 'nowrap' }}>{label}</span>
    <span style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, whiteSpace: 'nowrap' }}>
      <span style={{ fontSize: 52, fontWeight: 800, lineHeight: 1 }}>{value}</span>
      {unit ? <span style={{ fontSize: 26, fontWeight: 800 }}>{unit}</span> : null}
    </span>
  </div>
);

const WeightBar = ({ v1, v2, caption }: { v1: number; v2: number; caption: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <span style={{ fontSize: 19, fontWeight: 700, color: muted }}>{caption}</span>
    <span
      style={{
        width: 300,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: 16,
        border: '2.5px solid var(--osd-text)',
        background: v2 === 100 ? 'var(--osd-accent)' : surface,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        whiteSpace: 'nowrap',
      }}
    >
      V1 = {v1} / V2 = {v2}
    </span>
  </div>
);

const ClVerify: Page = () => (
  <Slide>
    <InfraHead part="② 데이터 이전 V1 → V2">DNS 변경 없이 V1에서 V2로</InfraHead>
    <WideProblem top={268} height={96}>
      수동 명령과 사후 확인만으로는 누락과 복구 여부를 판단하기 어려웠습니다.
    </WideProblem>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 392,
        width: 1680,
        height: 190,
        ...card,
        border: '2.5px solid var(--osd-text)',
        boxShadow: '10px 10px 0 var(--osd-accent)',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        gap: 26,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 19, fontWeight: 700, color: muted }}>GitHub Actions Workflow</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <PathNode hi>Preflight</PathNode>
          <PathArrow />
          <PathNode hi>Cutover</PathNode>
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 19, fontWeight: 700, color: muted }}>증거로 검증</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <PathNode>CloudTrail</PathNode>
          <PathNode>CloudWatch</PathNode>
        </span>
      </div>
      <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'flex-end', gap: 18 }}>
        <WeightBar caption="ALB 가중치 전환 전" v1={100} v2={0} />
        <span style={{ paddingBottom: 18 }}>
          <PathArrow />
        </span>
        <WeightBar caption="전환 후" v1={0} v2={100} />
      </span>
    </div>
    <Box left={120} top={610} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
      <Evidence label="Production Preflight" value="20/20" unit="PASS" />
      <Evidence label="관측 구간 요청" value="2,727" unit="건" />
      <Evidence label="요청이 0인 1분 구간" value="0" unit="개" />
      <Evidence label="Unhealthy Target" value="0" unit="개" />
      <Evidence label="Target 5xx, 연결 오류, ALB 연결 거부" value="미관측" />
      <Evidence label="DMS Validation Pending/Failed" value="0" unit="건" />
    </Box>
    <InfraBar current={1} />
  </Slide>
);

/* ── ② 데이터 이전 3: 한계와 SLO ── */

const LimitRow = ({ top, title, children }: { top: number; title: string; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      top,
      width: 1020,
      height: 112,
      ...card,
      borderRadius: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 32px',
    }}
  >
    <span style={{ width: 230, flex: 'none', fontSize: 26, fontWeight: 800 }}>{title}</span>
    <span style={{ fontSize: 23, fontWeight: 500, color: muted, lineHeight: 1.45 }}>{children}</span>
  </div>
);

const ClLimits: Page = () => (
  <Slide>
    <InfraHead part="② 데이터 이전 V1 → V2">무중단은 아니었고, 남은 숙제도 있습니다</InfraHead>
    <LimitRow top={268} title="무중단 전환 아님">쓰기와 인증이 102~103초 제한됨</LimitRow>
    <LimitRow top={400} title="목표 Peak 미검증">당시 요청률은 약 5~6 RPS, V2 목표 Peak 101~122 RPS는 검증 전</LimitRow>
    <LimitRow top={532} title="별도 오류 관측">ALB 자체 5xx 1건, TLS 협상 오류 총 6건</LimitRow>
    <LimitRow top={664} title="원인 미확정">전환 직후 V2 Frontend p95가 416.1ms → 71.4ms로 안정, 원인은 미확정</LimitRow>
    <LimitRow top={796} title="복구 경로 미검증">5차에서 JWT 키 불일치 401, 6차는 V1 복구 Step이 실행되지 않음</LimitRow>
    <div
      style={{
        position: 'absolute',
        left: 1180,
        top: 268,
        width: 620,
        height: 640,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        padding: '40px 44px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span style={{ fontSize: 24, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>SLO로 환산하면</span>
      <span style={{ fontSize: 23, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginTop: 28, lineHeight: 1.6 }}>
        99% 월간 오류 예산 <b style={{ color: '#FFFFFF' }}>25,920초</b>
        <br />
        103초 ÷ 25,920초 × 100 = <b style={{ color: '#FFFFFF' }}>0.397%</b>
      </span>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 30, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, color: 'var(--osd-accent)' }}>
        <span style={{ fontSize: 46, fontWeight: 800 }}>약</span>
        <span style={{ fontSize: 160, fontWeight: 800, lineHeight: 1 }}>0.4</span>
        <span style={{ fontSize: 64, fontWeight: 800 }}>%</span>
      </span>
      <span style={{ fontSize: 25, fontWeight: 600, lineHeight: 1.5, marginTop: 'auto' }}>
        전체 중단으로 보수 환산해도
        <br />
        월 오류 예산의 약 0.4% 규모
      </span>
    </div>
    <InfraBar current={1} />
  </Slide>
);

/* ───────────────────────── 04 Results ───────────────────────── */

const Ch04: Page = () => (
  <Divider n="04" title="프로젝트 결과">
    <SubItem n="01">숫자로 보는 니쥬</SubItem>
    <SubItem n="02">사용 추이</SubItem>
    <SubItem n="03">목표 달성도</SubItem>
  </Divider>
);

const Ring = ({ n, title, value, unit, children }: { n: string; title: string; value: ReactNode; unit: string; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <div style={{ fontSize: 22, fontWeight: 800, color: muted, fontFamily: 'var(--osd-font-display)' }}>{n}</div>
    <div style={{ fontSize: 34, fontWeight: 800, marginTop: 6 }}>{title}</div>
    <div
      style={{
        width: 320,
        height: 320,
        marginTop: 32,
        borderRadius: '50%',
        boxSizing: 'border-box',
        border: '30px solid var(--osd-accent)',
        background: surface,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingTop: 92,
        gap: 6,
      }}
    >
      <span style={{ fontSize: 68, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display }}>{value}</span>
      <span style={{ fontSize: 28, fontWeight: 800 }}>{unit}</span>
    </div>
    <div style={{ fontSize: 26, fontWeight: 500, marginTop: 32, lineHeight: 1.5 }}>{children}</div>
  </div>
);

const Numbers: Page = () => (
  <Slide>
    <Head chapter="04 프로젝트 결과">
      숫자로 보는 니쥬
    </Head>
    <Box left={120} top={300} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <Ring n="1" title="누적 가입자" value={<Fill>000</Fill>} unit="명">
        <Fill>기간, 집계 기준</Fill>
      </Ring>
      <Ring n="2" title="누적 대화" value={<Fill>000</Fill>} unit="회">
        <Fill>1인당 평균 턴 수</Fill>
      </Ring>
      <Ring n="3" title="생성된 추천" value={<Fill>000</Fill>} unit="건">
        <Fill>나를 위한 추천, 선물 추천</Fill>
      </Ring>
      <Ring n="4" title="상품 카탈로그" value="7,969" unit="개">
        상품마다 설명 문서 3종과 벡터
      </Ring>
    </Box>
  </Slide>
);

/* 추이 그래프: values를 비워 두면 입력 안내가 표시됩니다. */

const TrendChart = ({ labels, values }: { labels: string[]; values?: number[] }) => {
  const W = 1400;
  const Hh = 560;
  const x0 = 140;
  const x1 = W - 80;
  const y0 = 470;
  const y1 = 60;
  const step = (x1 - x0) / (labels.length - 1);
  const max = values && values.length ? Math.max(...values) * 1.15 : 1;
  const pts = values?.map((v, i) => [x0 + i * step, y0 - (v / max) * (y0 - y1)] as const);
  const d = pts?.map(([x, y], i) => `${i ? 'L' : 'M'} ${x} ${y}`).join(' ');
  return (
    <svg width={W} height={Hh} aria-hidden="true">
      {[0, 1, 2, 3].map((k) => (
        <line key={k} x1={x0} x2={x1} y1={y0 - (k * (y0 - y1)) / 3} y2={y0 - (k * (y0 - y1)) / 3} stroke={line} strokeWidth="2" />
      ))}
      <line x1={x0} x2={x1} y1={y0} y2={y0} stroke="#151515" strokeWidth="3" />
      {labels.map((l, i) => (
        <text key={l} x={x0 + i * step} y={y0 + 50} textAnchor="middle" fontSize="26" fontWeight="700" fill="#151515">
          {l}
        </text>
      ))}
      {pts && d ? (
        <>
          <path d={`${d} L ${pts[pts.length - 1][0]} ${y0} L ${x0} ${y0} Z`} fill="#FEE500" opacity="0.55" />
          <path d={d} fill="none" stroke="#151515" strokeWidth="4" />
          {pts.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="9" fill="#151515" />
              <text x={x} y={y - 24} textAnchor="middle" fontSize="28" fontWeight="800" fill="#151515">
                {values![i].toLocaleString()}
              </text>
            </g>
          ))}
        </>
      ) : (
        <>
          <path d={`M ${x0} ${y0 - 120} L ${x1} ${y0 - 260}`} stroke={muted} strokeWidth="4" strokeDasharray="12 12" />
          <text x={(x0 + x1) / 2} y={y1 + 60} textAnchor="middle" fontSize="28" fontWeight="700" fill={muted}>
            주차별 수치를 입력하세요 — TrendChart의 values
          </text>
        </>
      )}
    </svg>
  );
};

const Trend: Page = () => (
  <Slide>
    <Head chapter="04 프로젝트 결과">
      주차별 <Fill>지표명 (예: 대화 수)</Fill>
    </Head>
    <div style={{ position: 'absolute', left: 260, top: 300, width: 1400, height: 640, ...card, paddingTop: 40 }}>
      <TrendChart labels={['1주차', '3주차', '5주차', '7주차', '9주차', '11주차']} />
    </div>
  </Slide>
);

const GoalRow = ({ name, stage, status }: { name: ReactNode; stage: ReactNode; status: 'done' | 'partial' | 'todo' }) => (
  <div
    style={{
      height: 70,
      boxSizing: 'border-box',
      borderRadius: 20,
      background: status === 'todo' ? 'transparent' : surface,
      border: status === 'todo' ? `3px dashed ${muted}` : `2px solid ${line}`,
      display: 'grid',
      gridTemplateColumns: '1fr 260px 140px',
      alignItems: 'center',
      padding: '0 28px',
    }}
  >
    <span style={{ fontSize: 27, fontWeight: 800 }}>{name}</span>
    <span style={{ fontSize: 22, fontWeight: 600, color: muted }}>{stage}</span>
    <span
      style={{
        justifySelf: 'end',
        borderRadius: 999,
        padding: '4px 18px',
        fontSize: 21,
        fontWeight: 800,
        background: status === 'done' ? 'var(--osd-text)' : status === 'partial' ? 'var(--osd-accent)' : 'transparent',
        color: status === 'done' ? '#FFFFFF' : status === 'partial' ? 'var(--osd-text)' : muted,
        border: status === 'todo' ? `2px solid ${muted}` : 'none',
      }}
    >
      {status === 'done' ? '완료' : status === 'partial' ? '부분' : '미완'}
    </span>
  </div>
);

const Goals: Page = () => (
  <Slide>
    <Head chapter="04 프로젝트 결과">목표 달성도</Head>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 300,
        width: 500,
        height: 650,
        boxSizing: 'border-box',
        borderRadius: 48,
        background: 'var(--osd-accent)',
        padding: '52px 44px',
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: track.label, fontFamily: 'var(--osd-font-display)' }}>기능정의서 기준</div>
      <div style={{ fontSize: 140, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, marginTop: 40, lineHeight: 1 }}>
        <Fill>○○%</Fill>
      </div>
      <div style={{ fontSize: 32, fontWeight: 800, marginTop: 24 }}>목표 기능 달성률</div>
      <div style={{ fontSize: 24, fontWeight: 500, marginTop: 40, lineHeight: 1.7 }}>
        1차 배포 → 2차 배포
        <br />
        needu.gift, 카카오 로그인
        <br />
        <Fill>완료 ○ / 전체 ○개</Fill>
      </div>
    </div>
    <Box left={660} top={300} width={1140} style={{ display: 'grid', gap: 10 }}>
      <GoalRow name="대화형 취향 발견" stage={<Fill>목표 단계</Fill>} status="done" />
      <GoalRow name="취향 확인, 수정" stage={<Fill>목표 단계</Fill>} status="done" />
      <GoalRow name="나를 위한 추천" stage={<Fill>목표 단계</Fill>} status="done" />
      <GoalRow name="친구 선물 추천" stage={<Fill>목표 단계</Fill>} status="done" />
      <GoalRow name="예산 조절" stage={<Fill>목표 단계</Fill>} status="done" />
      <GoalRow name="추천 이유" stage={<Fill>목표 단계</Fill>} status="done" />
      <GoalRow name={<Fill>부분 완료 기능</Fill>} stage={<Fill>남은 부분</Fill>} status="partial" />
      <GoalRow name={<Fill>미완 기능</Fill>} stage={<Fill>못 한 이유 한 줄</Fill>} status="todo" />
    </Box>
  </Slide>
);

/* ───────────────────────── 05 Utilization ───────────────────────── */

const Ch05: Page = () => (
  <Divider n="05" title={<>활용방안 및<br />기대효과</>}>
    <SubItem n="01">사용자 경험의 변화</SubItem>
    <SubItem n="02">기능, 외부 확장 방향</SubItem>
  </Divider>
);

const Effect = ({ left, top, title, children }: { left: number; top: number; title: string; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: 540,
      height: 200,
      ...card,
      border: '2.5px solid var(--osd-text)',
      boxShadow: '10px 10px 0 rgba(21,21,21,0.12)',
      padding: '0 36px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <div style={{ fontSize: 32, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 25, fontWeight: 500, marginTop: 12, lineHeight: 1.5 }}>{children}</div>
  </div>
);

const Utilization: Page = () => (
  <Slide>
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 660,
        width: 1920,
        height: 420,
        background: 'var(--osd-accent)',
        borderRadius: '50% 50% 0 0 / 120px 120px 0 0',
      }}
    />
    <Head chapter="05 활용방안 및 기대효과">
      니쥬를 통한 경험의 변화
    </Head>
    <Phone width={320} left={800} top={330}>
      <img src={screenHome} alt="" style={{ display: 'block', width: '100%', aspectRatio: '860 / 1794', objectFit: 'contain', borderRadius: 31.6, background: surface, objectPosition: '50% 50%' }} />
    </Phone>
    <Effect left={140} top={340} title="나를 위한 선택">
      취향을 설명하지 못해도
      <br />
      대화만으로 나에게 맞는 상품
    </Effect>
    <Effect left={1240} top={340} title="선물하는 사람">
      친구 취향을 몰라도
      <br />
      받으면 기쁜 선물을 고름
    </Effect>
    <Effect left={140} top={720} title="기능 확장">
      반응으로 나아지는 추천
      <br />
      상황과 목적을 읽는 추천
    </Effect>
    <Effect left={1240} top={720} title="외부 확장">
      상품을 넘어 경험 추천으로
      <br />
      <Fill>제휴, B2B 등 확장 대상</Fill>
    </Effect>
  </Slide>
);

/* ───────────────────────── 06 Review ───────────────────────── */

const Ch06: Page = () => <Divider n="06" title={<>자체 평가 의견<br />및 후기</>} />;

const Quote = ({ tag, children }: { tag: string; children: ReactNode }) => (
  <div style={{ ...card, height: 600, padding: '48px 44px', boxShadow: '0 30px 60px rgba(21,21,21,0.06)', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <span
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: 'var(--osd-accent)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 80,
          fontWeight: 800,
          lineHeight: 1,
          paddingTop: 28,
          boxSizing: 'border-box',
          fontFamily: 'Georgia, serif',
        }}
      >
        “
      </span>
      <span style={{ fontSize: 30, fontWeight: 800 }}>{tag}</span>
    </div>
    <div style={{ fontSize: 27, fontWeight: 500, lineHeight: 1.65, marginTop: 36, flex: 1 }}>{children}</div>
    <div style={{ fontSize: 22, fontWeight: 700, color: muted }}>
      <Fill>이름, 스택</Fill>
    </div>
  </div>
);

const Review: Page = () => (
  <Slide>
    <Head chapter="06 자체 평가 의견 및 후기">자체 평가 의견 및 후기</Head>
    <Box left={120} top={310} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <Quote tag="잘한 점">
        <Fill>목표 대비 잘 해낸 것과 그 근거 (3~4줄)</Fill>
        <br />
        강조할 한 구절
      </Quote>
      <Quote tag="아쉬운 점">
        <Fill>부족했던 점과 원인 (3~4줄)</Fill>
        <br />
        강조할 한 구절
      </Quote>
      <Quote tag="앞으로">
        <Fill>다음에 개선, 확장하고 싶은 것 (3~4줄)</Fill>
        <br />
        강조할 한 구절
      </Quote>
    </Box>
  </Slide>
);

/* ───────────────────────── Demo and Q&A ───────────────────────── */

const Demo: Page = () => (
  <Slide>
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 560,
        width: 1920,
        height: 520,
        background: 'var(--osd-accent)',
        borderRadius: '50% 50% 0 0 / 120px 120px 0 0',
      }}
    />
    <Box left={120} top={100} width={1680} style={{ textAlign: 'center' }}>
      <H size={72}>시연 영상</H>
      <P size={28} style={{ marginTop: 14 }}>
        로그인 → 대화 → 취향 확인 → 나를 위한 추천 → 선물 추천
      </P>
    </Box>
    <div style={{ position: 'absolute', left: 400, top: 290, padding: 16, background: '#151515', borderRadius: 32, boxShadow: '0 30px 60px rgba(21,21,21,0.18)' }}>
      <ImagePlaceholder hint="시연 영상 (MP4, 50초 이내) 또는 대표 캡처" width={1088} height={612} style={{ borderRadius: 20, background: surface }} />
    </div>
  </Slide>
);

const QnA: Page = () => (
  <Slide>
    <Circle size={1000} left={-90} top={40} />
    <Circle size={200} left={860} top={80} color={warm} />
    <Phone width={410} left={220} top={120} rotate={-6}>
      <img src={screenLanding} alt="" style={{ display: 'block', width: '100%', aspectRatio: '860 / 1794', objectFit: 'contain', borderRadius: 43.3, background: surface, objectPosition: '50% 50%' }} />
    </Phone>
    <img src={mascot} alt="" style={{ position: 'absolute', left: 560, top: 590, width: 380, rotate: '8deg' }} />
    <Box left={1040} top={200} width={780}>
      <img src={logo} alt="NeedU" style={{ display: 'block', width: 400 }} />
      <H size={140} style={{ marginTop: 48 }}>
        Q &amp; A
      </H>
      <H size={64} style={{ marginTop: 20, fontFamily: 'var(--osd-font-body)' }}>
        감사합니다.
      </H>
      <div style={{ display: 'flex', gap: 16, marginTop: 56 }}>
        <Pill dark>needu.gift</Pill>
      </div>
      <P size={24} style={{ marginTop: 32, lineHeight: 1.7 }}>
        github.com/100-hours-a-week/KTB4-4th-AI
        <br />
        <Fill>팀 이메일, 블로그</Fill>
        <br />
        카카오테크 부트캠프 Team 4주라
      </P>
    </Box>
  </Slide>
);



/* ───────────────────────── Appendix A Architecture ───────────────────────── */

const AppendixArch: Page = () => (
  <Divider n="부록" title="아키텍처">
    <SubItem n="01">관리 환경 아키텍처</SubItem>
    <SubItem n="02">배포 환경 아키텍처</SubItem>
    <SubItem n="03">모니터링 환경 아키텍처</SubItem>
    <SubItem n="04">CI/CD 구조 아키텍처</SubItem>
  </Divider>
);

/** 다이어그램 이미지(여백과 제목을 걷어 낸 본체)를 흰 카드에 꼭 맞게 담는다. 카드 높이(height)를 주면 너비는 이미지 비율로 정해지고, 카드 안 여백은 모든 페이지 40px로 같다. */
const ArchFigure = ({
  src,
  w,
  h,
  height,
  top,
  align = 'center',
}: {
  src: string;
  w: number;
  h: number;
  height: number;
  top: number;
  align?: 'center' | 'right';
}) => {
  const pad = 40;
  const innerH = height - pad * 2;
  const innerW = Math.round((innerH * w) / h);
  const width = innerW + pad * 2;
  return (
    <div
      style={{
        position: 'absolute',
        left: align === 'right' ? 1800 - width : (1920 - width) / 2,
        top,
        width,
        height,
        boxSizing: 'border-box',
        padding: pad,
        borderRadius: 32,
        background: surface,
        border: `2px solid ${line}`,
        boxShadow: '0 24px 60px rgba(21, 21, 21, 0.06)',
      }}
    >
      <img src={src} alt="" style={{ display: 'block', width: innerW, height: innerH, objectFit: 'contain' }} />
    </div>
  );
};

const ManageArchitecture: Page = () => (
  <Slide>
    <Head chapter="부록 아키텍처">관리 환경 아키텍처</Head>
    <ArchFigure src={archManage} w={2721} h={1101} height={700} top={280} />
  </Slide>
);

const DeployArchitecture: Page = () => (
  <Slide>
    <Head chapter="부록 아키텍처" width={460}>
      배포 환경
      <br />
      아키텍처
    </Head>
    <ArchFigure src={archDeploy} w={3131} h={2401} height={880} top={100} align="right" />
  </Slide>
);

const MonitoringArchitecture: Page = () => (
  <Slide>
    <Head chapter="부록 아키텍처" width={400}>
      모니터링
      {' '}
      환경
      <br />
      아키텍처
    </Head>
    <ArchFigure src={archMonitoring} w={2341} h={1530} height={880} top={100} align="right" />
  </Slide>
);

const CICD: Page = () => (
  <Slide>
    <Head chapter="부록 아키텍처" width={460}>
      CI/CD 구조
      <br />
      아키텍처
    </Head>
    <ArchFigure src={archCicd} w={2591} h={1922} height={880} top={100} align="right" />
  </Slide>
);

/* ───────────────────────── Appendix B Stack detail ───────────────────────── */

const AppendixTech: Page = () => (
  <Divider n="부록" title={<>스택별<br />기술 상세</>}>
    <SubItem n="01">AI 대화와 추천</SubItem>
    <SubItem n="02">FE 사용자 경험</SubItem>
    <SubItem n="03">BE 성능과 안정성</SubItem>
    <SubItem n="04">인프라 비용과 운영</SubItem>
  </Divider>
);


/* 기술 선택 비교표 */

const compareCols = '340px repeat(4, 1fr)';

const CompareHead = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: track.label, padding: '0 24px', fontFamily: 'var(--osd-font-display)' }}>
    {children}
  </div>
);

const CompareCell = ({ children, chosen }: { children: ReactNode; chosen?: boolean }) => (
  <div
    style={{
      ...card,
      borderRadius: 22,
      height: 120,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.4,
      background: chosen ? softYellow : surface,
      border: chosen ? '2.5px solid var(--osd-text)' : card.border,
    }}
  >
    {children}
  </div>
);

const CompareName = ({ children, chosen }: { children: ReactNode; chosen?: boolean }) => (
  <div
    style={{
      borderRadius: 22,
      height: 120,
      padding: '0 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 1.3,
      boxSizing: 'border-box',
      background: chosen ? 'var(--osd-text)' : surface,
      color: chosen ? '#FFFFFF' : 'var(--osd-text)',
      border: chosen ? 'none' : `2px solid ${line}`,
    }}
  >
    <span>{children}</span>
    {chosen ? (
      <span style={{ background: 'var(--osd-accent)', color: 'var(--osd-text)', borderRadius: 999, padding: '4px 14px', fontSize: 20 }}>
        선택
      </span>
    ) : null}
  </div>
);

const AITech: Page = () => (
  <Slide>
    <Head chapter="부록 AI">모델 서빙 방식 선택</Head>
    <Box left={120} top={300} width={1680} style={{ display: 'grid', gridTemplateColumns: compareCols, gap: 12 }}>
      <CompareHead>후보</CompareHead>
      <CompareHead>대화 1회 비용</CompareHead>
      <CompareHead>첫 토큰 지연</CompareHead>
      <CompareHead>한국어 품질</CompareHead>
      <CompareHead>운영 부담, 장애 대응</CompareHead>
    </Box>
    <Box left={120} top={346} width={1680} style={{ display: 'grid', gridTemplateColumns: compareCols, gap: 12 }}>
      <CompareName chosen>
        vLLM 직접 서빙
        <br />
        <span style={{ fontSize: 22, opacity: 0.7 }}>RunPod GPU</span>
      </CompareName>
      <CompareCell chosen><Fill>측정값</Fill></CompareCell>
      <CompareCell chosen><Fill>p95 ○초</Fill></CompareCell>
      <CompareCell chosen><Fill>평가 결과</Fill></CompareCell>
      <CompareCell chosen>예비 모델 전환 게이트웨이</CompareCell>
      <CompareName>상용 API</CompareName>
      <CompareCell><Fill>측정값</Fill></CompareCell>
      <CompareCell><Fill>p95 ○초</Fill></CompareCell>
      <CompareCell><Fill>평가 결과</Fill></CompareCell>
      <CompareCell><Fill>비교 내용</Fill></CompareCell>
      <CompareName><Fill>다른 후보</Fill></CompareName>
      <CompareCell><Fill>측정값</Fill></CompareCell>
      <CompareCell><Fill>p95 ○초</Fill></CompareCell>
      <CompareCell><Fill>평가 결과</Fill></CompareCell>
      <CompareCell><Fill>비교 내용</Fill></CompareCell>
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 800,
        width: 1680,
        height: 140,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-accent)',
        padding: '0 44px',
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        fontSize: 30,
        fontWeight: 700,
      }}
    >
      <Pill dark size={22}>선택 이유</Pill>
      <Fill>서비스 가정(사용자 규모, 예산) 기준으로 왜 이 방식이 맞는지 한 문장</Fill>
    </div>
  </Slide>
);

/* 트러블슈팅 카드 (문제 → 해결) + 하단 결과 띠 */

const TroubleCard = ({ title, problem, fix }: { title: string; problem: ReactNode; fix: ReactNode }) => (
  <div style={{ position: 'relative', ...card, height: 470, padding: '58px 30px 0' }}>
    <span
      style={{
        position: 'absolute',
        left: 26,
        top: -22,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        borderRadius: 999,
        padding: '8px 20px',
        fontSize: 24,
        fontWeight: 800,
        whiteSpace: 'nowrap',
      }}
    >
      {title}
    </span>
    <div style={{ fontSize: 22, fontWeight: 800, color: muted }}>문제</div>
    <div style={{ fontSize: 24, fontWeight: 600, marginTop: 8, lineHeight: 1.45, height: 104 }}>{problem}</div>
    <div style={{ borderTop: '3px dotted var(--osd-text)', margin: '24px 0' }} />
    <div style={{ fontSize: 22, fontWeight: 800, color: muted }}>해결</div>
    <div style={{ fontSize: 24, fontWeight: 600, marginTop: 8, lineHeight: 1.45 }}>{fix}</div>
    <svg width="44" height="22" style={{ position: 'absolute', left: '50%', bottom: -22, marginLeft: -22 }} aria-hidden="true">
      <path d="M 0 0 L 44 0 L 22 22 z" fill="#151515" />
    </svg>
  </div>
);

const ResultCell = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <div style={{ fontSize: 20, fontWeight: 800, opacity: 0.6 }}>{label}</div>
    <div style={{ fontSize: 27, fontWeight: 800, marginTop: 6, lineHeight: 1.35 }}>{children}</div>
  </div>
);

const AITrouble: Page = () => (
  <Slide>
    <Head chapter="부록 AI">대화, 추천 품질 트러블슈팅</Head>
    <Box left={120} top={310} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <TroubleCard
        title="설문 같은 대화"
        problem={<>규칙 목록형 프롬프트로<br />대화가 설문처럼 느껴짐</>}
        fix={<>성격 소개글로 바꾸고<br />이번 턴의 반응 방식만<br />코드가 결정</>}
      />
      <TroubleCard
        title="비선호 오저장"
        problem={<>싫다고 한 대상이<br />관심사로 저장됨</>}
        fix={<>후보 추출, 태도 판단,<br />저장 위치 결정을<br />세 단계로 분리</>}
      />
      <TroubleCard
        title="없는 상품 추천"
        problem={<>카탈로그에 없는 관심사도<br />상품으로 채워짐</>}
        fix={<>검색 1위 유사도가<br />기준 미만이면<br />탐색 추천으로 전환</>}
      />
      <TroubleCard
        title="추천 이유 사실성"
        problem={<>확인되지 않은 장점이<br />추천 이유에 붙음</>}
        fix={<>취향과의 연결만 쓰게 하고<br />5개씩 나눠 동시 생성</>}
      />
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 812,
        width: 1680,
        height: 140,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-accent)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        alignItems: 'center',
        padding: '0 30px',
      }}
    >
      <ResultCell label="결과">시스템 프롬프트<br />2,486자 → 776자</ResultCell>
      <ResultCell label="결과">태도 판정<br />15/17 → <Fill>도입 후</Fill></ResultCell>
      <ResultCell label="결과"><Fill>무관 추천 비율</Fill><br /><Fill>전 → 후</Fill></ResultCell>
      <ResultCell label="결과"><Fill>사실 오류 비율</Fill><br /><Fill>전 → 후</Fill></ResultCell>
    </div>
  </Slide>
);

/* 측정 지표 카드 */

const Metric = ({ value, label, note, accent }: { value: ReactNode; label: string; note: ReactNode; accent?: boolean }) => (
  <div
    style={{
      ...card,
      height: 290,
      padding: '0 34px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: accent ? 'var(--osd-accent)' : surface,
      border: accent ? 'none' : card.border,
    }}
  >
    <div style={{ fontSize: 56, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, lineHeight: 1.1, whiteSpace: 'nowrap' }}>
      {value}
    </div>
    <div style={{ fontSize: 28, fontWeight: 800, marginTop: 20 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 500, marginTop: 8, color: accent ? 'var(--osd-text)' : muted }}>{note}</div>
  </div>
);

const DocRow = ({ label, children }: { label: string; children: ReactNode }) => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <span
      style={{
        flex: 'none',
        width: 120,
        textAlign: 'center',
        padding: '8px 0',
        borderRadius: 999,
        background: 'var(--osd-accent)',
        fontSize: 22,
        fontWeight: 800,
      }}
    >
      {label}
    </span>
    <span style={{ fontSize: 26, fontWeight: 500 }}>{children}</span>
  </div>
);

const AIQuality: Page = () => (
  <Slide>
    <Head chapter="부록 AI">AI 응답 품질 검증</Head>
    <Box left={120} top={300} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <Metric accent value={<Fill>○% → ○%</Fill>} label="취향 추출 정확도" note={<>좋아함, 싫어함 판정, <Fill>표본 ○건</Fill></>} />
      <Metric value={<Fill>○.○○</Fill>} label="추천 적합도" note={<Fill>nDCG@k 또는 사람 평가</Fill>} />
      <Metric value={<Fill>○% → ○%</Fill>} label="추천 이유 사실성" note={<Fill>지어낸 내용 비율, 검수 방법</Fill>} />
      <Metric value={<Fill>○.○초</Fill>} label="첫 토큰 지연 p95" note={<Fill>측정 조건, 동시 사용자 수</Fill>} />
    </Box>
    <div style={{ position: 'absolute', left: 120, top: 630, width: 1000, height: 320, ...card, padding: '36px 40px' }}>
      <div style={{ fontSize: 28, fontWeight: 800 }}>평가 방법</div>
      <div style={{ display: 'grid', gap: 22, marginTop: 28 }}>
        <DocRow label="데이터셋"><Fill>대화 ○건, 상품 질의 ○건으로 구성</Fill></DocRow>
        <DocRow label="정답 라벨"><Fill>사람 라벨, 교차 검수 방법</Fill></DocRow>
        <DocRow label="평가 도구"><Fill>LLM-as-judge / 사람 평가 / 자동 테스트</Fill></DocRow>
      </div>
    </div>
    <Box left={1160} top={630} width={640}>
      <Slot height={320} style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 14 }}>
        <span style={{ fontSize: 28, color: 'var(--osd-text)' }}>측정의 한계</span>
        <span style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.5 }}>
          표본 크기, 라벨 기준 등
          <br />
          아직 부족한 점 1~2개
        </span>
      </Slot>
    </Box>
  </Slide>
);

/* FE */

const Shift = ({ from, to, why }: { from: string; to: string; why: ReactNode }) => (
  <div style={{ ...card, height: 186, padding: '0 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
      <span style={{ fontSize: 26, color: muted, fontWeight: 600, textDecoration: 'line-through' }}>{from}</span>
      <span style={{ fontSize: 30, fontWeight: 800 }}>→</span>
      <span style={{ fontSize: 36, fontWeight: 800 }}>
        {to}
      </span>
    </div>
    <div style={{ fontSize: 26, color: muted, fontWeight: 500, marginTop: 16 }}>{why}</div>
  </div>
);

const FEExperience: Page = () => (
  <Slide>
    <Circle size={640} left={-200} top={640} />
    <img src={mascot} alt="" style={{ position: 'absolute', left: 150, top: 690, width: 300 }} />
    <Box left={120} top={100} width={680}>
      <Eyebrow>부록 FE</Eyebrow>
      <H size={72} style={{ marginTop: 32 }}>
        피드백으로
        <br />
        바꾼 경험
      </H>
      <P size={28} style={{ marginTop: 28 }}>
        사용자 테스트 <Fill>○명</Fill>, 과업 성공률 <Fill>○%</Fill>
        <br />
        첫 추천까지 <Fill>○분</Fill>
      </P>
    </Box>
    <Box left={860} top={120} width={940} style={{ display: 'grid', gap: 20 }}>
      <Shift from="취향을 캐묻는 질문" to="경험을 듣는 대화" why="좋아하는 것을 묻는 대신 최근의 하루를 묻습니다." />
      <Shift from="끝없이 이어지는 질문" to="쉬어 가는 리듬" why="매번 질문으로 끝내지 않고 반응만 건네는 턴을 둡니다." />
      <Shift from="일방적인 분석 결과" to="확인하고 고치는 프로필" why="‘이렇게 기억하려 해요’에 맞아요, 틀려요로 답합니다." />
      <Shift from="정보가 차면 종료" to="흐름을 존중하는 마무리" why="대화가 즐거운 동안에는 먼저 끊지 않습니다." />
    </Box>
  </Slide>
);

const PerfItem = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <div style={{ fontSize: 22, fontWeight: 700, color: muted }}>{label}</div>
    <div style={{ fontSize: 36, fontWeight: 800, marginTop: 6, fontFamily: 'var(--osd-font-display)' }}>{children}</div>
  </div>
);

const FEImplementation: Page = () => (
  <Slide>
    <Head chapter="부록 FE">핵심 구현과 성능</Head>
    <Circle size={420} left={110} top={560} />
    <Phone width={320} left={180} top={300}>
      <img src={screenChat1} alt="" style={{ display: 'block', width: '100%', aspectRatio: '860 / 1794', objectFit: 'contain', borderRadius: 31.6, background: surface, objectPosition: '50% 50%' }} />
    </Phone>
    <TagBox left={640} top={320} width={1160} height={180} tag="기술 선택">
      <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.5 }}>
        <Fill>대안 vs 선택 vs 이유 (예: SSE vs WebSocket vs 폴링 → 선택과 근거)</Fill>
      </div>
    </TagBox>
    <TagBox left={640} top={550} width={1160} height={180} tag="핵심 구현">
      <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.5 }}>
        <Fill>구현 포인트와 효과 (예: 응답 스트리밍, 섹션별 로딩, 에러 처리)</Fill>
      </div>
    </TagBox>
    <TagBox left={640} top={780} width={1160} height={170} tag="성능, 모바일 기준" tone="yellow">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <PerfItem label="Lighthouse 성능"><Fill>○○ → ○○</Fill></PerfItem>
        <PerfItem label="LCP"><Fill>○.○s → ○.○s</Fill></PerfItem>
        <PerfItem label="번들 크기"><Fill>○KB → ○KB</Fill></PerfItem>
      </div>
    </TagBox>
  </Slide>
);

/* BE */

const Bar = ({ value, height, label, dark, empty }: { value: ReactNode; height: number; label: string; dark?: boolean; empty?: boolean }) => (
  <div style={{ width: 170, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ fontSize: 34, fontWeight: 800, fontFamily: 'var(--osd-font-display)', marginBottom: 12, whiteSpace: 'nowrap' }}>{value}</div>
    <div
      style={{
        width: 130,
        height,
        boxSizing: 'border-box',
        borderRadius: '18px 18px 0 0',
        background: empty ? 'transparent' : dark ? 'var(--osd-text)' : 'var(--osd-accent)',
        border: empty ? `3px dashed ${muted}` : 'none',
      }}
    />
    <div style={{ fontSize: 24, fontWeight: 700, marginTop: 14 }}>{label}</div>
  </div>
);

const ChartCard = ({ left, title, note, children }: { left: number; title: string; note: ReactNode; children: ReactNode }) => (
  <div style={{ position: 'absolute', left, top: 300, width: 816, height: 470, ...card, padding: '32px 40px' }}>
    <div style={{ fontSize: 30, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 22, fontWeight: 500, color: muted, marginTop: 6 }}>{note}</div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 90, height: 300, marginTop: 24, borderBottom: '3px solid var(--osd-text)' }}>
      {children}
    </div>
  </div>
);

const cellBase: CSSProperties = {
  fontSize: 24,
  lineHeight: 1.4,
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 30px',
  height: 140,
  boxSizing: 'border-box',
};

const CellLabel = ({ children }: { children: ReactNode }) => (
  <span style={{ fontSize: 20, fontWeight: 800, opacity: 0.55, marginBottom: 6 }}>{children}</span>
);

const BELoad: Page = () => (
  <Slide>
    <Head chapter="부록 BE">부하 테스트, 병목 개선</Head>
    <ChartCard left={120} title="조회 API 초당 최대 처리량" note={<>RPS, 로컬 환경, <Fill>도구, VU, 지속 시간</Fill></>}>
      <Bar value="130" height={8} label="개선 전" />
      <Bar value="3,571" height={200} label="개선 후" dark />
    </ChartCard>
    <ChartCard left={984} title="p95 응답 시간" note={<Fill>같은 조건에서 잰 전과 후 지연</Fill>}>
      <Bar value={<Fill>○ms</Fill>} height={200} label="개선 전" empty />
      <Bar value={<Fill>○ms</Fill>} height={110} label="개선 후" empty />
    </ChartCard>
    <Box left={120} top={800} width={1680} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      <div style={{ ...cellBase, ...card, borderRadius: 24 }}>
        <CellLabel>병목 원인</CellLabel>
        <Fill>예: N+1 쿼리, 커넥션 풀 부족</Fill>
      </div>
      <div style={{ ...cellBase, ...card, borderRadius: 24 }}>
        <CellLabel>조치</CellLabel>
        <Fill>캐시, 인덱스, 쿼리 수정 등</Fill>
      </div>
      <div style={{ ...cellBase, borderRadius: 24, background: 'var(--osd-accent)' }}>
        <CellLabel>서비스 가정 대비</CellLabel>
        <Fill>가정 피크 ○ RPS 대비 ○배 여유</Fill>
      </div>
    </Box>
  </Slide>
);

const DesignCard = ({ tag, sub, children }: { tag: ReactNode; sub: ReactNode; children: ReactNode }) => (
  <div style={{ position: 'relative', ...card, height: 330, padding: '60px 34px 0' }}>
    <span
      style={{
        position: 'absolute',
        left: 30,
        top: -22,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        borderRadius: 999,
        padding: '8px 22px',
        fontSize: 24,
        fontWeight: 800,
        whiteSpace: 'nowrap',
      }}
    >
      {tag}
    </span>
    <span style={{ background: softYellow, borderRadius: 10, padding: '6px 14px', fontSize: 24, fontWeight: 800 }}>{sub}</span>
    <div style={{ fontSize: 25, fontWeight: 500, marginTop: 28, lineHeight: 1.6 }}>{children}</div>
    <svg width="44" height="22" style={{ position: 'absolute', left: '50%', bottom: -22, marginLeft: -22 }} aria-hidden="true">
      <path d="M 0 0 L 44 0 L 22 22 z" fill="#151515" />
    </svg>
  </div>
);

const BEDesign: Page = () => (
  <Slide>
    <Head chapter="부록 BE">안정성을 위한 설계</Head>
    <Box left={120} top={320} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      <DesignCard tag={<>설계 1 <Fill>예: 캐싱 전략</Fill></>} sub={<Fill>해결한 문제</Fill>}>
        <Fill>무엇을, 왜 바꿨는지</Fill>
        <br />
        <Fill>고려한 대안과 고른 이유</Fill>
      </DesignCard>
      <DesignCard tag={<>설계 2 <Fill>예: 동시성 제어</Fill></>} sub={<Fill>해결한 문제</Fill>}>
        <Fill>무엇을, 왜 바꿨는지</Fill>
        <br />
        <Fill>고려한 대안과 고른 이유</Fill>
      </DesignCard>
      <DesignCard tag={<>설계 3 <Fill>예: 테스트 자동화</Fill></>} sub={<Fill>검증 방법</Fill>}>
        <Fill>테스트 수, 커버리지</Fill>
        <br />
        <Fill>CI에서 자동 실행 여부</Fill>
      </DesignCard>
    </Box>
    <Box left={120} top={740} width={1680} style={{ textAlign: 'center' }}>
      <H size={44} style={{ fontFamily: 'var(--osd-font-body)', lineHeight: 1.5 }}>
        
          <Fill>검증 결과 한 문장 (예: 동시 요청 ○건에서도 데이터 1건만 생성 확인)</Fill>
        
      </H>
    </Box>
  </Slide>
);

/* BE, 장애 대응과 배치 성능 (서비스 점검 자료 반영) */

const cream = '#FFF8E4';
const alertRed = '#E5482D';
const ink2 = '#555555';
const barTone = {
  before: 'var(--osd-accent)',
  after: 'var(--osd-text)',
  retry: 'repeating-linear-gradient(-45deg, #FEE500 0 9px, #FFF6B8 9px 18px)',
} as const;

/** 제목 아래 한 줄 설명 */
const SubLine = ({ children }: { children: ReactNode }) => (
  <Box left={120} top={252} width={1680}>
    <P size={28} style={{ color: ink2 }}>
      {children}
    </P>
  </Box>
);

/** 페이지 왼쪽 아래 출처와 측정 조건 */
const Source = ({ children }: { children: ReactNode }) => (
  <div style={{ position: 'absolute', left: 120, bottom: 44, fontSize: 20, fontWeight: 500, color: muted }}>{children}</div>
);

/** 흐름도 상자 */
const FlowBox = ({
  kicker,
  title,
  sub,
  tone = 'cream',
  dot,
  width,
  height,
  size,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  tone?: 'cream' | 'yellow' | 'dark' | 'white' | 'soft';
  dot?: boolean;
  width: number;
  height: number;
  size?: number;
}) => (
  <div
    style={{
      width,
      height,
      flex: 'none',
      boxSizing: 'border-box',
      borderRadius: 28,
      background:
        tone === 'yellow'
          ? 'var(--osd-accent)'
          : tone === 'dark'
            ? 'var(--osd-text)'
            : tone === 'white'
              ? surface
              : tone === 'soft'
                ? softYellow
                : cream,
      color: tone === 'dark' ? '#FFFFFF' : 'var(--osd-text)',
      border: tone === 'cream' || tone === 'white' ? `2px solid ${line}` : 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 18px',
    }}
  >
    {dot ? <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--osd-accent)', marginBottom: 12 }} /> : null}
    {kicker ? <div style={{ fontSize: 20, fontWeight: 700, opacity: 0.55, marginBottom: 8 }}>{kicker}</div> : null}
    <div style={{ fontSize: size ?? 34, fontWeight: 800, lineHeight: 1.2 }}>{title}</div>
    {sub ? <div style={{ fontSize: 21, fontWeight: 500, marginTop: 10, opacity: 0.72, lineHeight: 1.4 }}>{sub}</div> : null}
  </div>
);

/** 흐름도 화살표 (가로) */
const FlowArrow = ({ label }: { label?: ReactNode }) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <span style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>→</span>
    <span style={{ fontSize: 18, fontWeight: 800, whiteSpace: 'nowrap', minHeight: 22 }}>{label}</span>
  </div>
);

/** 흐름도를 담는 흰 패널 */
const FlowPanel = ({ top, label, children }: { top: number; label: ReactNode; children: ReactNode }) => (
  <div style={{ position: 'absolute', left: 120, top, width: 1680, ...card, padding: '32px 40px 36px' }}>
    <div style={{ fontSize: 24, fontWeight: 800, color: ink2 }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>{children}</div>
  </div>
);

const CheckLead = ({ top, children }: { top: number; children: ReactNode }) => (
  <Box left={120} top={top} width={1680}>
    <div style={{ fontSize: 28, fontWeight: 600, color: ink2 }}>
      점검하려던 것 <strong style={{ color: 'var(--osd-text)', fontWeight: 800 }}>{children}</strong>
    </div>
  </Box>
);

/** 점검 항목 카드 (검정) */
const CheckCard = ({ n, title, sub }: { n: string; title: ReactNode; sub: ReactNode }) => (
  <div
    style={{
      height: 140,
      borderRadius: 28,
      background: 'var(--osd-text)',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 34px',
      boxSizing: 'border-box',
    }}
  >
    <Num n={n} />
    <div>
      <div style={{ fontSize: 30, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 21, fontWeight: 500, marginTop: 6, color: 'rgba(255,255,255,0.62)' }}>{sub}</div>
    </div>
  </div>
);

/** 작은 알약 라벨 (흐름도 위 원인 표시) */
const Chip = ({ children }: { children: ReactNode }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 20px',
      borderRadius: 999,
      background: surface,
      border: `2px solid ${line}`,
      fontSize: 20,
      fontWeight: 800,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

/** 왼쪽에 노란 띠가 붙은 결론 한 줄 */
const Verdict = ({ top, title, children }: { top: number; title: ReactNode; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      top,
      width: 1680,
      height: 100,
      boxSizing: 'border-box',
      borderRadius: 24,
      background: surface,
      borderLeft: '10px solid var(--osd-accent)',
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      padding: '0 40px',
    }}
  >
    <span style={{ fontSize: 32, fontWeight: 800 }}>{title}</span>
    <span style={{ fontSize: 23, fontWeight: 500, color: ink2 }}>{children}</span>
  </div>
);

/** 숫자 카드 (노랑, 흰색, 검정) */
const StatBox = ({
  left,
  top,
  width,
  height,
  tone,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  tone: 'yellow' | 'white' | 'dark';
  children: ReactNode;
}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width,
      height,
      boxSizing: 'border-box',
      borderRadius: 'var(--osd-radius)',
      padding: '0 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: tone === 'yellow' ? 'var(--osd-accent)' : tone === 'dark' ? 'var(--osd-text)' : surface,
      color: tone === 'dark' ? '#FFFFFF' : 'var(--osd-text)',
      border: tone === 'white' ? `2px solid ${line}` : 'none',
    }}
  >
    {children}
  </div>
);

const StatBig = ({ size, unit, color, children }: { size: number; unit?: ReactNode; color?: string; children: ReactNode }) => (
  <div
    style={{
      fontSize: size,
      fontWeight: 800,
      fontFamily: 'var(--osd-font-display)',
      letterSpacing: track.display,
      lineHeight: 1,
      color,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
    {unit ? <span style={{ fontSize: Math.round(size * 0.4), marginLeft: 8 }}>{unit}</span> : null}
  </div>
);

const StatLabel = ({ children, color }: { children: ReactNode; color?: string }) => (
  <div style={{ fontSize: 28, fontWeight: 800, marginTop: 14, color }}>{children}</div>
);

const StatNote = ({ children, dark }: { children: ReactNode; dark?: boolean }) => (
  <div style={{ fontSize: 20, fontWeight: 500, marginTop: 8, color: dark ? 'rgba(255,255,255,0.62)' : ink2 }}>{children}</div>
);

/** 방법 비교표 */
const CompareCard = ({
  left,
  top,
  width,
  height,
  title,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  title: ReactNode;
  children: ReactNode;
}) => (
  <div style={{ position: 'absolute', left, top, width, height, ...card, padding: '30px 30px 0' }}>
    <div style={{ fontSize: 22, fontWeight: 800, color: ink2, padding: '0 14px' }}>{title}</div>
    <div style={{ marginTop: 16 }}>{children}</div>
  </div>
);

const CompareRow = ({ name, hi, children }: { name: ReactNode; hi?: boolean; children: ReactNode }) => (
  <div
    style={{
      height: 66,
      boxSizing: 'border-box',
      borderRadius: 14,
      background: hi ? softYellow : 'transparent',
      borderBottom: hi ? 'none' : `2px solid ${line}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      padding: '0 18px',
    }}
  >
    <span style={{ fontSize: 24, fontWeight: 800, whiteSpace: 'nowrap' }}>{name}</span>
    <span style={{ fontSize: 21, fontWeight: 500, color: ink2, textAlign: 'right' }}>{children}</span>
  </div>
);

/* 세로 막대 차트 */

const ChartFrame = ({
  left,
  top,
  width,
  height,
  title,
  legend,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  title: ReactNode;
  legend?: ReactNode;
  children: ReactNode;
}) => (
  <div style={{ position: 'absolute', left, top, width, height, ...card, padding: '32px 40px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: ink2 }}>{title}</div>
      <div style={{ display: 'flex', gap: 22 }}>{legend}</div>
    </div>
    {children}
  </div>
);

const LegendItem = ({ tone, children }: { tone: keyof typeof barTone; children: ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 19, fontWeight: 600, color: ink2 }}>
    <span style={{ width: 18, height: 18, borderRadius: 5, background: barTone[tone] }} />
    {children}
  </span>
);

/** 막대 영역: ticks는 눈금선, children은 막대 묶음 */
const Plot = ({ height, ticks, children }: { height: number; ticks: ReactNode; children: ReactNode }) => (
  <div style={{ position: 'relative', marginTop: 44, marginLeft: 56 }}>
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height }}>{ticks}</div>
    <div style={{ position: 'absolute', left: 0, right: 0, top: height, height: 3, background: 'var(--osd-text)' }} />
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-around' }}>{children}</div>
  </div>
);

const Tick = ({ v, scale, alert, label }: { v: number; scale: number; alert?: boolean; label?: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: v * scale,
      borderTop: alert ? `3px dashed ${alertRed}` : '2px solid #F1ECDD',
    }}
  >
    <span
      style={{
        position: 'absolute',
        right: '100%',
        marginRight: 14,
        top: -13,
        fontSize: 18,
        fontWeight: alert ? 800 : 500,
        color: alert ? alertRed : muted,
      }}
    >
      {v}
    </span>
    {label ? (
      <span style={{ position: 'absolute', right: 0, top: -32, fontSize: 20, fontWeight: 800, color: alertRed }}>{label}</span>
    ) : null}
  </div>
);

const BarGroup = ({
  height,
  name,
  sub,
  tags,
  children,
}: {
  height: number;
  name: ReactNode;
  sub?: ReactNode;
  tags?: ReactNode;
  children: ReactNode;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ height, display: 'flex', alignItems: 'flex-end', gap: 12 }}>{children}</div>
    {tags ? <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>{tags}</div> : null}
    <div style={{ fontSize: 24, fontWeight: 800, marginTop: tags ? 8 : 16 }}>{name}</div>
    {sub ? <div style={{ fontSize: 18, fontWeight: 500, color: muted, marginTop: 4 }}>{sub}</div> : null}
  </div>
);

const BarTag = ({ width, children }: { width: number; children: ReactNode }) => (
  <span style={{ width, textAlign: 'center', fontSize: 18, fontWeight: 600, color: ink2 }}>{children}</span>
);

const VBar = ({
  v,
  scale,
  width,
  tone,
  text,
  inner,
  size,
}: {
  v: number;
  scale: number;
  width: number;
  tone: keyof typeof barTone;
  text?: ReactNode;
  inner?: ReactNode;
  size?: number;
}) => (
  <div style={{ width, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ fontSize: size ?? 26, fontWeight: 800, fontFamily: 'var(--osd-font-display)', marginBottom: 10, whiteSpace: 'nowrap' }}>
      {text ?? v}
    </div>
    <div
      style={{
        width,
        height: Math.max(v * scale, 5),
        borderRadius: v ? '12px 12px 0 0' : 3,
        background: barTone[tone],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 800,
      }}
    >
      {inner}
    </div>
  </div>
);

/* ── AI 챗봇 답변 유실 ── */

const BEChatCheck: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      핵심 기능인 AI 챗봇의 안정성을 점검했습니다
    </Head>
    <SubLine>니쥬는 AI와의 대화로 선물 취향을 분석합니다. 서버에 문제가 생겨도 대화가 이어지는지 확인하고자 했습니다</SubLine>
    <FlowPanel top={330} label="AI 챗봇 한 턴">
      <FlowBox title="사용자" sub="메시지 전송" dot width={290} height={200} />
      <FlowArrow label="POST 요청, 202 접수" />
      <FlowBox title="API 서버" sub="여러 대, 답변 작업 시작" width={290} height={200} />
      <FlowArrow label="스트리밍 호출" />
      <FlowBox title="AI 서버" sub="답변 생성" width={290} height={200} />
      <FlowArrow label="SSE" />
      <FlowBox title="화면에 답변" sub="조각씩 실시간 표시" tone="yellow" width={290} height={200} />
    </FlowPanel>
    <CheckLead top={712}>접수된 메시지에 답이 끝까지 오는가</CheckLead>
    <Box left={120} top={772} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      <CheckCard n="1" title="서버가 갑자기 죽으면" sub="강제 종료, OOM" />
      <CheckCard n="2" title="배포로 서버가 재시작되면" sub="롤링 배포" />
      <CheckCard n="3" title="답이 없어 다시 보내면" sub="같은 메시지 재전송" />
    </Box>
    <Source>AI 대화: POST /messages → 202, 답변은 SSE로 전달, BE는 여러 대(K8s Pod)</Source>
  </Slide>
);

const ScenarioRow = ({ code, children }: { code: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '14px 0' }}>
    <span style={{ width: 96, flex: 'none', fontSize: 24, fontWeight: 800 }}>{code}</span>
    <span style={{ fontSize: 23, fontWeight: 500, color: ink2 }}>{children}</span>
  </div>
);

const chatPlotH = 370;
const chatScale = 320 / 160;

const BEChatFailure: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      장애를 재현해 보니 548건의 답이 사라졌습니다
    </Head>
    <SubLine>그래서 강제 종료, 배포, 재전송 상황을 재현하고, DB에 답이 없는 메시지를 셌습니다</SubLine>
    <ChartFrame
      left={120}
      top={330}
      width={1110}
      height={630}
      title="시나리오별 답변 작업 유실 (MQ 도입 전)"
      legend={
        <>
          <LegendItem tone="before">답변 작업 유실</LegendItem>
          <LegendItem tone="retry">재전송이 다시 만든 답</LegendItem>
        </>
      }
    >
      <Plot
        height={chatPlotH}
        ticks={
          <>
            <Tick v={0} scale={chatScale} />
            <Tick v={50} scale={chatScale} />
            <Tick v={100} scale={chatScale} />
            <Tick v={150} scale={chatScale} />
          </>
        }
      >
        <BarGroup height={chatPlotH} name="S3-1">
          <VBar v={126} scale={chatScale} width={84} tone="before" />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S3-2">
          <VBar v={131} scale={chatScale} width={84} tone="before" />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S3-3">
          <VBar v={130} scale={chatScale} width={84} tone="before" />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S4">
          <VBar v={160} scale={chatScale} width={84} tone="before" />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S2" sub="종료 전 작업 완료">
          <VBar v={0} scale={chatScale} width={84} tone="after" />
        </BarGroup>
        <BarGroup height={chatPlotH} name="재전송" sub="119건은 재전송으로 복구">
          <VBar v={119} scale={chatScale} width={84} tone="retry" text="1 (+119)" inner="119" />
        </BarGroup>
      </Plot>
    </ChartFrame>
    <StatBox left={1270} top={330} width={530} height={250} tone="yellow">
      <StatBig size={120} unit="건">548</StatBig>
      <StatLabel>DB에도 답이 없는 메시지</StatLabel>
      <StatNote>6개 실행 합계, 69,372건 중</StatNote>
    </StatBox>
    <div style={{ position: 'absolute', left: 1270, top: 610, width: 530, height: 350, ...card, padding: '34px 44px' }}>
      <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 10 }}>시나리오</div>
      <ScenarioRow code="S3">1분마다 BE 1대 강제 종료</ScenarioRow>
      <ScenarioRow code="S4">BE 2대 동시 강제 종료</ScenarioRow>
      <ScenarioRow code="S2">롤링 배포</ScenarioRow>
      <ScenarioRow code="재전송">S3 + 답이 없으면 다시 보냄</ScenarioRow>
    </div>
    <Source>로컬 Docker, BE 3대, AI 서버 2대, 가상 사용자 212명, 실행당 5분 30초, 11/03</Source>
  </Slide>
);

const BEChatCause: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      답변을 만드는 작업이 서버 메모리에만 있었습니다
    </Head>
    <SubLine>메시지는 DB에 남지만, 작업은 받은 서버의 스레드 안에만 있어 서버와 함께 사라졌습니다</SubLine>
    <div style={{ position: 'absolute', left: 120, top: 330, width: 1680, height: 500, ...card }} />
    <Box left={580} top={352} width={600} style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
      <Chip>강제 종료</Chip>
      <Chip>배포 재시작</Chip>
      <Chip>OOM</Chip>
    </Box>
    <Box left={580} top={400} width={600} style={{ textAlign: 'center', fontSize: 30, fontWeight: 700 }}>
      ↓
    </Box>
    <Box
      left={150}
      top={480}
      width={330}
      style={{
        height: 130,
        boxSizing: 'border-box',
        borderRadius: 28,
        background: cream,
        border: `2px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '0 28px',
      }}
    >
      <span style={{ width: 48, height: 48, flex: 'none', borderRadius: '50%', background: 'var(--osd-accent)' }} />
      <div>
        <div style={{ fontSize: 32, fontWeight: 800 }}>사용자</div>
        <div style={{ fontSize: 21, fontWeight: 500, color: ink2, marginTop: 4 }}>“오늘 뭐 입을까?”</div>
      </div>
    </Box>
    <Box left={490} top={510} width={200} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>→</span>
      <span style={{ fontSize: 18, fontWeight: 800, whiteSpace: 'nowrap' }}>POST 요청, 202 접수</span>
    </Box>
    <Box
      left={700}
      top={445}
      width={360}
      style={{
        height: 200,
        borderRadius: 30,
        background: 'var(--osd-accent)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}
    >
      <span style={{ fontSize: 36, fontWeight: 800 }}>API 서버</span>
      <span style={{ background: 'var(--osd-text)', color: '#FFFFFF', borderRadius: 14, padding: '12px 22px', fontSize: 22, fontWeight: 700 }}>
        답변 작업, 서버 메모리
      </span>
    </Box>
    <Box left={1080} top={518} width={220} style={{ textAlign: 'center', fontSize: 34, fontWeight: 700, whiteSpace: 'nowrap' }}>
      ──✕──
    </Box>
    <Box
      left={1320}
      top={460}
      width={440}
      style={{
        height: 170,
        boxSizing: 'border-box',
        borderRadius: 28,
        background: '#F4EFE1',
        border: `3px dashed ${muted}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: 34, fontWeight: 800 }}>답변 없음</span>
      <span style={{ fontSize: 21, fontWeight: 500, color: ink2, marginTop: 8 }}>사용자는 계속 기다림</span>
    </Box>
    <Box left={700} top={652} width={360} style={{ textAlign: 'center', fontSize: 30, fontWeight: 700 }}>
      ↓
    </Box>
    <Box
      left={700}
      top={705}
      width={360}
      style={{
        height: 90,
        boxSizing: 'border-box',
        borderRadius: 24,
        background: surface,
        border: `2px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
      }}
    >
      <span style={{ fontSize: 30, fontWeight: 800 }}>MySQL</span>
      <span style={{ fontSize: 20, fontWeight: 500, color: ink2 }}>사용자 메시지만 남음</span>
    </Box>
    <Box
      left={1170}
      top={710}
      width={590}
      style={{
        height: 80,
        borderRadius: 20,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
        fontWeight: 800,
      }}
    >
      서버가 죽으면 작업도 함께 사라짐
    </Box>
    <Verdict top={860} title="BE 1대가 죽을 때마다 답변 작업 평균 32건 유실">
      DB에도 답이 없어 아무도 다시 만들지 않음
    </Verdict>
    <Source>로컬 Docker, BE 3대, AI 서버 2대, 가상 사용자 212명, MQ 도입 전 강제 종료 12번 평균 (11/03)</Source>
  </Slide>
);

const StepBox = ({ n, kicker, title, hi, children }: { n: string; kicker: string; title: string; hi?: boolean; children: ReactNode }) => (
  <div
    style={{
      flex: 'none',
      width: 470,
      height: 190,
      boxSizing: 'border-box',
      borderRadius: 28,
      background: hi ? softYellow : cream,
      border: hi ? '2px solid #F2D640' : `2px solid ${line}`,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 20,
      padding: '32px 30px 0',
    }}
  >
    <Num n={n} />
    <div>
      <div style={{ fontSize: 19, fontWeight: 700, color: muted }}>{kicker}</div>
      <div style={{ fontSize: 30, fontWeight: 800, marginTop: 6 }}>{title}</div>
      <div style={{ fontSize: 21, fontWeight: 500, color: ink2, marginTop: 10, lineHeight: 1.45 }}>{children}</div>
    </div>
  </div>
);

const BEChatChoice: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      답변 작업은 이미 Redis 위에서 돌고 있었습니다
    </Head>
    <SubLine>대화방 락을 Redis에서 얻어야만 답변을 만들 수 있었기에, 큐도 같은 Redis에 두었습니다</SubLine>
    <FlowPanel top={330} label="답변 한 턴이 Redis를 거치는 곳, MQ 도입 전부터">
      <StepBox n="1" kicker="메시지 접수" title="대화방 락 획득" hi>
        SET NX, TTL 120초
        <br />
        못 얻으면 429
      </StepBox>
      <FlowArrow />
      <StepBox n="2" kicker="답변 생성" title="생성 중 표시, 조각 전달">
        Redis 키, Pub/Sub
      </StepBox>
      <FlowArrow />
      <StepBox n="3" kicker="답변 완료" title="대화방 락 해제">
        주인 토큰 확인 후 삭제
      </StepBox>
    </FlowPanel>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 690,
        width: 820,
        height: 270,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: 23, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Redis가 멈추면 이미 답변을 만들 수 없는 구조</div>
      <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--osd-accent)', marginTop: 18, lineHeight: 1.3 }}>
        큐도 같은 Redis에 두면
        <br />새 인프라 0, 새 장애 지점 0
      </div>
    </div>
    <CompareCard left={980} top={690} width={820} height={270} title="다른 방법과 비교">
      <CompareRow name="Redis Streams" hi>
        같은 Redis, 회수와 ACK 기본 제공
      </CompareRow>
      <CompareRow name="SQS, RabbitMQ, Kafka">인프라와 장애 지점이 하나 더 늘어남</CompareRow>
      <CompareRow name="Redis Pub/Sub">받는 쪽이 없으면 사라짐</CompareRow>
    </CompareCard>
    <Source>근거: AiConversationLock, AiChatEventPublisher, AI 대화 전용 Redis(#330), 검토 10/21 ~ 10/22</Source>
  </Slide>
);

/** 절대 좌표 흐름도용 화살표 레이어 */
const ArrowLayer = ({ children }: { children: ReactNode }) => (
  <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }} aria-hidden="true">
    <defs>
      <marker id="be-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#151515" />
      </marker>
    </defs>
    <g stroke="#151515" strokeWidth="3" fill="none">
      {children}
    </g>
  </svg>
);

const ArrowLabel = ({ x, y, center, children }: { x: number; y: number; center?: boolean; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: center ? 'translateX(-50%)' : undefined,
      fontSize: 18,
      fontWeight: 800,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </div>
);

const PointCard = ({ n, title, sub }: { n: string; title: ReactNode; sub: ReactNode }) => (
  <div style={{ ...card, borderRadius: 26, height: 110, display: 'flex', alignItems: 'center', gap: 22, padding: '0 32px' }}>
    <Num n={n} />
    <div>
      <div style={{ fontSize: 27, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 20, fontWeight: 500, color: ink2, marginTop: 4 }}>{sub}</div>
    </div>
  </div>
);

const BEChatSolution: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      작업을 남기고, 살아 있는 워커가 이어받습니다
    </Head>
    <SubLine>API는 작업을 저장하고 바로 응답합니다. 답변은 워커가 큐에서 꺼내 만듭니다</SubLine>
    <ArrowLayer>
      <path d="M 306 470 H 414" markerEnd="url(#be-arrow)" />
      <path d="M 414 522 H 306" markerEnd="url(#be-arrow)" />
      <path d="M 708 495 H 817" markerEnd="url(#be-arrow)" />
      <path d="M 1121 495 H 1229" markerEnd="url(#be-arrow)" />
      <path d="M 1513 495 H 1622" markerEnd="url(#be-arrow)" />
      <path d="M 562 606 V 694" markerEnd="url(#be-arrow)" />
      <path d="M 970 694 V 640" markerEnd="url(#be-arrow)" strokeDasharray="7 6" />
      <path d="M 1372 606 V 694" markerEnd="url(#be-arrow)" />
    </ArrowLayer>
    <ArrowLabel x={360} y={434} center>
      POST
    </ArrowLabel>
    <ArrowLabel x={360} y={532} center>
      SSE
    </ArrowLabel>
    <ArrowLabel x={762} y={458} center>
      XADD
    </ArrowLabel>
    <ArrowLabel x={1175} y={458} center>
      꺼내기, 회수
    </ArrowLabel>
    <ArrowLabel x={1567} y={458} center>
      호출
    </ArrowLabel>
    <ArrowLabel x={578} y={636}>
      한 트랜잭션
    </ArrowLabel>
    <ArrowLabel x={986} y={652}>
      10초마다 재투입
    </ArrowLabel>
    <ArrowLabel x={1388} y={636}>
      답변 저장
    </ArrowLabel>
    <Box left={120} top={420}>
      <FlowBox title="사용자" tone="white" width={180} height={150} />
    </Box>
    <Box left={422} top={390}>
      <FlowBox title="API 서버" sub={<>메시지 + 작업 저장<br />→ 202 응답</>} tone="white" width={280} height={210} />
    </Box>
    <Box
      left={825}
      top={360}
      width={290}
      style={{
        height: 270,
        boxSizing: 'border-box',
        borderRadius: 30,
        background: softYellow,
        border: '2px solid #F2D640',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
      }}
    >
      <span style={{ fontSize: 34, fontWeight: 800 }}>Redis</span>
      <span style={{ background: 'var(--osd-accent)', borderRadius: 16, padding: '18px 22px', fontSize: 22, fontWeight: 800 }}>
        Stream 작업 대기열
      </span>
    </Box>
    <Box left={1237} top={390}>
      <FlowBox title="워커" sub={<>작업을 꺼내<br />답변 생성</>} tone="dark" width={270} height={210} />
    </Box>
    <Box left={1630} top={420}>
      <FlowBox title="AI 서버" tone="white" width={170} height={150} />
    </Box>
    <Box
      left={422}
      top={700}
      width={1085}
      style={{
        height: 96,
        boxSizing: 'border-box',
        borderRadius: 26,
        background: surface,
        border: `2px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
      }}
    >
      <span style={{ fontSize: 34, fontWeight: 800 }}>MySQL ai_reply_jobs</span>
      <span style={{ fontSize: 22, fontWeight: 500, color: ink2 }}>답변 작업의 원본</span>
    </Box>
    <Box left={120} top={836} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      <PointCard n="1" title="작업을 먼저 저장" sub="메시지와 같은 트랜잭션" />
      <PointCard n="2" title="멈추면 30초 뒤 회수" sub="다른 워커가 이어받음" />
      <PointCard n="3" title="답은 한 번만 저장" sub="attempt가 맞을 때만" />
    </Box>
    <Source>AiChatFacade, AiReplyJobService, AiReplyWorker, 상위 이슈 #228</Source>
  </Slide>
);

const BEChatResult: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      답변 작업 유실이 0건이 됐습니다
    </Head>
    <SubLine>같은 6개 장애 시나리오를 MQ 도입 전과 후로 다시 돌렸습니다</SubLine>
    <ChartFrame
      left={120}
      top={330}
      width={1110}
      height={630}
      title="시나리오별 답변 작업 유실, 전과 후"
      legend={
        <>
          <LegendItem tone="before">도입 전</LegendItem>
          <LegendItem tone="retry">재전송이 다시 만든 답</LegendItem>
          <LegendItem tone="after">도입 후</LegendItem>
        </>
      }
    >
      <Plot
        height={chatPlotH}
        ticks={
          <>
            <Tick v={0} scale={chatScale} />
            <Tick v={50} scale={chatScale} />
            <Tick v={100} scale={chatScale} />
            <Tick v={150} scale={chatScale} />
          </>
        }
      >
        <BarGroup height={chatPlotH} name="S3-1" tags={<><BarTag width={50}>전</BarTag><BarTag width={50}>후</BarTag></>}>
          <VBar v={126} scale={chatScale} width={50} tone="before" size={22} />
          <VBar v={0} scale={chatScale} width={50} tone="after" size={22} />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S3-2" tags={<><BarTag width={50}>전</BarTag><BarTag width={50}>후</BarTag></>}>
          <VBar v={131} scale={chatScale} width={50} tone="before" size={22} />
          <VBar v={0} scale={chatScale} width={50} tone="after" size={22} />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S3-3" tags={<><BarTag width={50}>전</BarTag><BarTag width={50}>후</BarTag></>}>
          <VBar v={130} scale={chatScale} width={50} tone="before" size={22} />
          <VBar v={0} scale={chatScale} width={50} tone="after" size={22} />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S4" tags={<><BarTag width={50}>전</BarTag><BarTag width={50}>후</BarTag></>}>
          <VBar v={160} scale={chatScale} width={50} tone="before" size={22} />
          <VBar v={0} scale={chatScale} width={50} tone="after" size={22} />
        </BarGroup>
        <BarGroup height={chatPlotH} name="S2" tags={<><BarTag width={50}>전</BarTag><BarTag width={50}>후</BarTag></>}>
          <VBar v={0} scale={chatScale} width={50} tone="after" size={22} />
          <VBar v={0} scale={chatScale} width={50} tone="after" size={22} />
        </BarGroup>
        <BarGroup height={chatPlotH} name="재전송" tags={<><BarTag width={50}>전</BarTag><BarTag width={50}>후</BarTag></>}>
          <VBar v={119} scale={chatScale} width={50} tone="retry" text="1 (+119)" inner="119" size={22} />
          <VBar v={0} scale={chatScale} width={50} tone="after" text="0 (+2)" size={22} />
        </BarGroup>
      </Plot>
    </ChartFrame>
    <StatBox left={1270} top={330} width={530} height={240} tone="yellow">
      <StatBig size={104}>548 → 0</StatBig>
      <StatLabel>DB에도 답이 없는 메시지</StatLabel>
      <StatNote>모든 시나리오에서 0건</StatNote>
    </StatBox>
    <StatBox left={1270} top={594} width={530} height={160} tone="white">
      <StatBig size={56}>32 → 0건</StatBig>
      <StatNote>BE 1대 강제 종료당 작업 유실</StatNote>
    </StatBox>
    <StatBox left={1270} top={778} width={530} height={182} tone="dark">
      <StatBig size={44} color="var(--osd-accent)">
        726회 회수, 중복 0
      </StatBig>
      <StatNote dark>죽은 서버의 작업을 다른 서버가 이어받음</StatNote>
    </StatBox>
    <Source>로컬 Docker, BE 3대, AI 서버 2대, 가상 사용자 212명, MQ 전 11/03 69,372건 / MQ 후 11/11 61,637건, 같은 장애 계획</Source>
  </Slide>
);

/* ── 생일 알림 배치, 웹푸시 ── */

const BEBatchCheck: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      생일 알림 배치와 웹푸시 발송을 점검했습니다
    </Head>
    <SubLine>생일자의 친구들에게 알림을 만들어 저장하고 웹푸시로 보냅니다. 대상이 300만 건일 때도 제때, 빠짐없이 가는지 확인했습니다</SubLine>
    <FlowPanel top={330} label="생일 알림 한 번의 흐름">
      <FlowBox kicker="Reader" title="생일자 조회" sub="배치 대상 읽기" width={300} height={200} />
      <FlowArrow />
      <FlowBox kicker="Processor" title="수신 친구 조회" sub="알림 구성" width={300} height={200} />
      <FlowArrow />
      <FlowBox kicker="Writer" title="알림 저장" sub="DB INSERT" width={300} height={200} />
      <FlowArrow label="@Async" />
      <FlowBox kicker="발송" title="웹푸시" sub="친구들의 기기로 전송" tone="yellow" width={300} height={200} />
    </FlowPanel>
    <CheckLead top={712}>300만 건을 5분 안에, 하나도 빠짐없이 보내는가</CheckLead>
    <Box left={120} top={772} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      <CheckCard n="1" title="배치가 5분 안에 끝나는가" sub="300만 건, 통과선 5분" />
      <CheckCard n="2" title="DB에 부담을 주지 않는가" sub="DB 왕복, 조회 검사 행, 메모리" />
      <CheckCard n="3" title="웹푸시가 빠짐없이 가는가" sub="발송 유실, 처리량" />
    </Box>
    <Source>생일 알림 배치: Reader → Processor → Writer, 대상 300만 건 기준</Source>
  </Slide>
);

/** 가로 막대 한 줄 (배치 시간) */
const HBarRow = ({ top, name, sub, v, tone }: { top: number; name: string; sub: string; v: number; tone: 'before' | 'after' }) => (
  <>
    <div style={{ position: 'absolute', left: 40, top: top + 2, width: 250 }}>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{name}</div>
      <div style={{ fontSize: 19, fontWeight: 500, color: muted, marginTop: 6 }}>{sub}</div>
    </div>
    <div style={{ position: 'absolute', left: 300, top, width: v, height: 76, borderRadius: '0 14px 14px 0', background: barTone[tone] }} />
    <div
      style={{
        position: 'absolute',
        left: 300 + v + 20,
        top: top + 14,
        fontSize: 40,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        letterSpacing: track.display,
        whiteSpace: 'nowrap',
      }}
    >
      {v}초
    </div>
  </>
);

const AxisTick = ({ v }: { v: number }) => (
  <span style={{ position: 'absolute', left: 300 + v, top: 528, transform: 'translateX(-50%)', fontSize: 18, color: muted }}>{v}</span>
);

const MetricLine = ({ label, children }: { label: string; children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72,
      borderTop: `2px solid ${line}`,
    }}
  >
    <span style={{ fontSize: 24, fontWeight: 600, color: ink2 }}>{label}</span>
    <span style={{ fontSize: 34, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display }}>{children}</span>
  </div>
);

const BEBatchMeasure: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      배치는 491초가 걸렸고, 웹푸시는 58만 건이 사라졌습니다
    </Head>
    <SubLine>300만 건 배치가 통과선 5분을 넘겼고, 대기열이 가득 차면 웹푸시 발송 작업이 그대로 버려졌습니다</SubLine>
    <div style={{ position: 'absolute', left: 120, top: 330, width: 1010, height: 630, ...card }}>
      <div style={{ position: 'absolute', left: 40, top: 32, fontSize: 24, fontWeight: 800, color: ink2 }}>배치 시간, 개선 전 (300만 건)</div>
      <div style={{ position: 'absolute', left: 600, top: 120, height: 390, borderLeft: `3px dashed ${alertRed}` }} />
      <div style={{ position: 'absolute', left: 612, top: 104, fontSize: 20, fontWeight: 800, color: alertRed }}>통과선 5분 (300초)</div>
      <HBarRow top={188} name="배치 전체" sub="Reader → Writer" v={491} tone="before" />
      <HBarRow top={348} name="알림 INSERT" sub="Writer 한 행씩 저장" v={307} tone="after" />
      <div style={{ position: 'absolute', left: 300, top: 510, width: 510, height: 3, background: 'var(--osd-text)' }} />
      <AxisTick v={0} />
      <AxisTick v={100} />
      <AxisTick v={200} />
      <AxisTick v={300} />
      <AxisTick v={400} />
      <AxisTick v={500} />
    </div>
    <StatBox left={1170} top={330} width={630} height={300} tone="yellow">
      <StatBig size={136} unit="건">58만</StatBig>
      <StatLabel>웹푸시 발송 유실</StatLabel>
      <StatNote>전체 발송의 약 65%, 운영 규모</StatNote>
    </StatBox>
    <div style={{ position: 'absolute', left: 1170, top: 660, width: 630, height: 300, ...card, padding: '30px 44px 0' }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: ink2, marginBottom: 14 }}>그 밖의 지표 (개선 전)</div>
      <MetricLine label="DB 왕복">315만 회</MetricLine>
      <MetricLine label="대상 조회 검사 행">2,700만</MetricLine>
      <MetricLine label="웹푸시 처리량">초당 37.5건</MetricLine>
    </div>
    <Source>개선 전, 배치 대상 300만 건, 웹푸시 유실은 운영 규모 기준</Source>
  </Slide>
);

/** 단계별 병목 개선 카드 */
const FixCard = ({
  n,
  title,
  problem,
  fix,
  code,
  result,
  resultNote,
}: {
  n: string;
  title: ReactNode;
  problem: ReactNode;
  fix: ReactNode;
  code?: ReactNode;
  result: ReactNode;
  resultNote: ReactNode;
}) => (
  <div style={{ position: 'relative', ...card, height: 630, padding: '32px 32px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <Num n={n} />
      <span style={{ fontSize: 27, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ fontSize: 21, fontWeight: 800, color: alertRed, marginTop: 30 }}>문제</div>
    <div style={{ fontSize: 22, fontWeight: 500, color: ink2, marginTop: 8, lineHeight: 1.5 }}>{problem}</div>
    <div style={{ borderTop: '3px dotted #E8DFA8', marginTop: 24 }} />
    <div style={{ fontSize: 21, fontWeight: 800, color: muted, marginTop: 24 }}>해결</div>
    <div style={{ fontSize: 28, fontWeight: 800, marginTop: 8, lineHeight: 1.35 }}>{fix}</div>
    {code ? (
      <span
        style={{
          display: 'inline-block',
          marginTop: 14,
          background: softYellow,
          borderRadius: 10,
          padding: '8px 16px',
          fontSize: 20,
          fontWeight: 700,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          letterSpacing: 0,
        }}
      >
        {code}
      </span>
    ) : null}
    <div
      style={{
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 20,
        height: 130,
        boxSizing: 'border-box',
        borderRadius: 24,
        background: 'var(--osd-accent)',
        padding: '0 26px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: 44, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, whiteSpace: 'nowrap' }}>
        {result}
      </div>
      <div style={{ fontSize: 19, fontWeight: 700, marginTop: 6 }}>{resultNote}</div>
    </div>
  </div>
);

const BEBatchFix: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      읽기, 조회, 저장, 세 단계의 병목을 각각 고쳤습니다
    </Head>
    <SubLine>가장 큰 병목은 알림 INSERT(307초)였고, 단계마다 읽고 쓰는 방식을 바꿨습니다</SubLine>
    <Box left={120} top={330} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      <FixCard
        n="1"
        title="Reader 생일자 조회"
        problem={<>대상을 한꺼번에 조회해 메모리를 과다 사용하고, 실행마다 GC 정지(STW)가 반복</>}
        fix="userId 커서로 chunk 단위 조회"
        result="메모리 −68%"
        resultNote="GC 정지 시간 −65%"
      />
      <FixCard
        n="2"
        title="Processor 수신 친구 조회"
        problem={<>생일자마다 친구 ID를 인덱스로 찾은 뒤 테이블 본문을 다시 읽음</>}
        fix="커버링 인덱스로 인덱스만 읽고 끝"
        code="(friend_user_id, owner_user_id)"
        result="쿼리 시간 −60%"
        resultNote="친구 ID 조회 쿼리"
      />
      <FixCard
        n="3"
        title="Writer 알림 저장"
        problem={<>한 행씩 INSERT하고 자주 커밋해 네트워크 왕복과 DB 부하 증가</>}
        fix="JDBC 배치로 여러 행을 묶어 저장"
        result="307초 → 61초"
        resultNote="INSERT 시간 −80%"
      />
    </Box>
    <Source>Reader, Processor, Writer 단계별 개선, 배치 대상 300만 건</Source>
  </Slide>
);

const ThreadBox = () => (
  <span
    style={{
      width: 50,
      height: 50,
      boxSizing: 'border-box',
      borderRadius: 12,
      background: surface,
      border: '2.5px solid var(--osd-text)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 800,
    }}
  >
    T
  </span>
);

const QueueSlot = () => <span style={{ width: 16, height: 42, borderRadius: 5, background: 'var(--osd-text)', display: 'inline-block' }} />;

const BEPushCause: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      웹푸시 작업이 서버 메모리 대기열에서 버려졌습니다
    </Head>
    <SubLine>@Async 스레드풀(스레드 4개, 대기열 100)로 보냈는데, 대기열이 가득 차면 새 작업은 즉시 거부됐습니다</SubLine>
    <div style={{ position: 'absolute', left: 120, top: 330, width: 1680, height: 490, ...card }} />
    <Box left={660} top={350} width={600} style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
      <Chip>300만 건 배치</Chip>
      <Chip>알림마다 발송 요청</Chip>
    </Box>
    <Box left={660} top={398} width={600} style={{ textAlign: 'center', fontSize: 30, fontWeight: 700 }}>
      ↓
    </Box>
    <Box left={160} top={475}>
      <FlowBox title="생일 알림 배치" sub="알림 저장 후 발송 요청" width={320} height={150} size={32} />
    </Box>
    <Box left={490} top={510} width={190} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>→</span>
      <span style={{ fontSize: 18, fontWeight: 800 }}>@Async</span>
    </Box>
    <Box
      left={690}
      top={440}
      width={560}
      style={{ height: 220, boxSizing: 'border-box', borderRadius: 30, background: 'var(--osd-accent)', padding: '28px 30px 0' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 32, fontWeight: 800 }}>스레드풀, 서버 메모리</span>
        <span style={{ fontSize: 19, fontWeight: 800 }}>서버 1대</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 34 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 10 }}>스레드 4개, 한 건씩 동기 발송</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <ThreadBox />
            <ThreadBox />
            <ThreadBox />
            <ThreadBox />
          </div>
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 10 }}>대기열 100, 가득 참</div>
          <div style={{ display: 'flex', gap: 5, height: 50, alignItems: 'center' }}>
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
            <QueueSlot />
          </div>
        </div>
      </div>
    </Box>
    <Box left={1255} top={512} width={180} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: alertRed }}>
      <span style={{ fontSize: 32, fontWeight: 700, lineHeight: 1, whiteSpace: 'nowrap' }}>──✕──</span>
      <span style={{ fontSize: 19, fontWeight: 800 }}>즉시 거부</span>
    </Box>
    <Box
      left={1440}
      top={475}
      width={330}
      style={{
        height: 150,
        boxSizing: 'border-box',
        borderRadius: 28,
        background: '#F4EFE1',
        border: `3px dashed ${muted}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: 32, fontWeight: 800 }}>웹푸시 없음</span>
      <span style={{ fontSize: 20, fontWeight: 500, color: ink2, marginTop: 8 }}>버려진 작업은 남지 않음</span>
    </Box>
    <Box
      left={160}
      top={690}
      width={890}
      style={{
        height: 90,
        borderRadius: 20,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
        fontWeight: 800,
      }}
    >
      작업이 메모리에만 있어, 거부되면 그대로 사라짐
    </Box>
    <Box
      left={1080}
      top={690}
      width={690}
      style={{
        height: 90,
        boxSizing: 'border-box',
        borderRadius: 20,
        background: surface,
        border: `2px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
        fontWeight: 800,
      }}
    >
      스레드 4개가 한 건씩 기다려, 처리량도 낮음
    </Box>
    <Verdict top={860} title="웹푸시 약 58만 건(65%) 유실">
      처리량은 초당 37.5건에 머묾
    </Verdict>
    <Source>개선 전, @Async 스레드풀, 배치 실행 서버 1대</Source>
  </Slide>
);

const BEPushSolution: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      작업을 알림과 같은 DB에 남기고, 워커가 꺼내 보냅니다
    </Head>
    <SubLine>외부 MQ와 달리 알림과 한 트랜잭션으로 커밋할 수 있어, 커밋과 발행 사이 유실을 따로 다루지 않아도 됩니다</SubLine>
    <Box left={120} top={385}>
      <FlowBox title="생일 알림 배치" sub="알림 구성" tone="white" width={260} height={170} size={30} />
    </Box>
    <Box left={380} top={445} width={90} style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, lineHeight: 1 }}>
      →
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 470,
        top: 340,
        width: 450,
        height: 260,
        boxSizing: 'border-box',
        borderRadius: 32,
        border: '3px dashed var(--osd-text)',
        padding: '36px 26px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 24,
          top: -20,
          background: 'var(--osd-text)',
          color: '#FFFFFF',
          borderRadius: 999,
          padding: '6px 20px',
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        하나의 트랜잭션
      </span>
      <FlowBox title="알림 INSERT" width={394} height={88} size={30} />
      <FlowBox title="웹푸시 태스크 INSERT" tone="soft" width={394} height={88} size={30} />
    </div>
    <Box left={920} top={442} width={100} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>→</span>
      <span style={{ fontSize: 18, fontWeight: 800 }}>커밋</span>
    </Box>
    <Box left={1020} top={375}>
      <FlowBox title="DB 태스크 큐" sub="발송할 작업이 DB에 쌓임" tone="yellow" width={330} height={190} />
    </Box>
    <Box left={1350} top={442} width={100} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>→</span>
      <span style={{ fontSize: 18, fontWeight: 800 }}>꺼내기</span>
    </Box>
    <Box left={1450} top={375}>
      <FlowBox title="발송 워커" sub="큐에서 꺼내 웹푸시 발송" tone="dark" width={350} height={190} />
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 660,
        width: 790,
        height: 300,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>왜 DB 태스크 큐인가</div>
      <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--osd-accent)', marginTop: 16, lineHeight: 1.3 }}>
        알림이 커밋되면
        <br />
        웹푸시 작업도 반드시 남음
      </div>
      <div style={{ fontSize: 21, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
        거부하는 메모리 대기열 없이, 발송은 워커가 따로 처리
      </div>
    </div>
    <CompareCard left={950} top={660} width={850} height={300} title="방법 비교">
      <CompareRow name="DB 태스크 큐" hi>
        알림과 한 트랜잭션, 커밋되면 작업도 남음
      </CompareRow>
      <CompareRow name="외부 MQ">커밋 후 발행 사이 유실을 따로 처리해야 함</CompareRow>
      <CompareRow name="@Async (기존)">메모리 대기열, 가득 차면 즉시 거부</CompareRow>
    </CompareCard>
    <Source>검토 대상: DB 태스크 큐, 외부 MQ, 생일 알림 배치 → DB 태스크 큐 → 발송 워커</Source>
  </Slide>
);

const batchPlotH = 400;
const batchScale = 0.72;

const BEBatchResult: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      배치는 172초로 통과했고, 웹푸시 유실은 0건이 됐습니다
    </Head>
    <SubLine>같은 300만 건 기준으로 개선 전과 후를 다시 비교했습니다</SubLine>
    <ChartFrame
      left={120}
      top={330}
      width={950}
      height={630}
      title="배치 시간 전과 후 (초)"
      legend={
        <>
          <LegendItem tone="before">개선 전</LegendItem>
          <LegendItem tone="after">개선 후</LegendItem>
        </>
      }
    >
      <Plot
        height={batchPlotH}
        ticks={
          <>
            <Tick v={100} scale={batchScale} />
            <Tick v={200} scale={batchScale} />
            <Tick v={300} scale={batchScale} alert label="통과선 5분" />
            <Tick v={400} scale={batchScale} />
            <Tick v={500} scale={batchScale} />
          </>
        }
      >
        <BarGroup height={batchPlotH} name="배치 전체" tags={<><BarTag width={110}>전</BarTag><BarTag width={110}>후</BarTag></>}>
          <VBar v={491} scale={batchScale} width={110} tone="before" />
          <VBar v={172} scale={batchScale} width={110} tone="after" />
        </BarGroup>
        <BarGroup height={batchPlotH} name="알림 INSERT" tags={<><BarTag width={110}>전</BarTag><BarTag width={110}>후</BarTag></>}>
          <VBar v={307} scale={batchScale} width={110} tone="before" />
          <VBar v={61} scale={batchScale} width={110} tone="after" />
        </BarGroup>
      </Plot>
    </ChartFrame>
    <StatBox left={1110} top={330} width={690} height={240} tone="yellow">
      <StatBig size={104}>58만 → 0</StatBig>
      <StatLabel>웹푸시 유실</StatLabel>
      <StatNote>큐 거부 0건, 발송 실패 0건</StatNote>
    </StatBox>
    <StatBox left={1110} top={594} width={690} height={170} tone="white">
      <StatBig size={60} unit="건/초">37.5 → 602</StatBig>
      <StatLabel>웹푸시 처리량 16배</StatLabel>
      <StatNote>DB 태스크 큐 + 발송 워커</StatNote>
    </StatBox>
    <StatBox left={1110} top={788} width={690} height={172} tone="dark">
      <StatBig size={52} color="var(--osd-accent)">
        DB 왕복 −99%
      </StatBig>
      <StatLabel>315만 → 3.5만 회</StatLabel>
      <StatNote dark>대상 조회 검사 행 2,700만 → 603만 (−78%)</StatNote>
    </StatBox>
    <Source>배치 대상 300만 건, Reader 메모리 −68%, GC 정지 −65%, 친구 조회 쿼리 −60%</Source>
  </Slide>
);

const SumCol = ({ label, value, note }: { label: string; value: ReactNode; note: ReactNode }) => (
  <div style={{ borderLeft: '2px solid rgba(255,255,255,0.16)', padding: '0 0 0 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ fontSize: 21, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{label}</div>
    <div
      style={{
        fontSize: 56,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
        letterSpacing: track.display,
        color: 'var(--osd-accent)',
        marginTop: 14,
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: 19, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>{note}</div>
  </div>
);

const BigPair = ({ tone, title, value, unit, badge, children }: { tone: 'yellow' | 'white'; title: string; value: ReactNode; unit: string; badge: string; children: ReactNode }) => (
  <div
    style={{
      height: 370,
      boxSizing: 'border-box',
      borderRadius: 'var(--osd-radius)',
      background: tone === 'yellow' ? 'var(--osd-accent)' : surface,
      border: tone === 'white' ? `2px solid ${line}` : 'none',
      padding: '40px 46px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ fontSize: 26, fontWeight: 800 }}>{title}</div>
    <div style={{ marginTop: 'auto' }}>
      <StatBig size={112} unit={unit}>
        {value}
      </StatBig>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 26 }}>
        <span style={{ background: 'var(--osd-text)', color: '#FFFFFF', borderRadius: 999, padding: '8px 22px', fontSize: 22, fontWeight: 800 }}>
          {badge}
        </span>
        <span style={{ fontSize: 22, fontWeight: 600, color: ink2 }}>{children}</span>
      </div>
    </div>
  </div>
);

const BEBatchSummary: Page = () => (
  <Slide>
    <Head chapter="부록 BE" width={1680}>
      자원은 덜 쓰고, 처리는 더 빠르고 많아졌습니다
    </Head>
    <SubLine>서버 자원을 안정적으로 사용하면서 배치 처리 시간을 줄이고, 웹푸시 발송 처리량을 늘렸습니다</SubLine>
    <Box left={120} top={330} width={1680} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <BigPair tone="yellow" title="배치 처리" value="491 → 172" unit="초" badge="−65%">
        통과선 5분 안으로
      </BigPair>
      <BigPair tone="white" title="웹푸시 발송 처리량" value="37.5 → 602" unit="건/초" badge="16배">
        유실 58만 건 → 0건
      </BigPair>
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 730,
        width: 1680,
        height: 230,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        display: 'grid',
        gridTemplateColumns: '360px 1fr 1fr 1fr',
        padding: '0 0 0 44px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 21, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>그러면서</div>
        <div style={{ fontSize: 34, fontWeight: 800, marginTop: 10, lineHeight: 1.3 }}>
          서버 자원은
          <br />더 안정적으로
        </div>
      </div>
      <SumCol label="BE 메모리 (한도 대비)" value="96% → 50%" note="1,974 → 1,017MiB" />
      <SumCol label="GC 정지 시간" value="−65%" note="15.3 → 5.3초" />
      <SumCol label="MySQL CPU 최대" value="107% → 67%" note="1코어 포화 해소" />
    </div>
    <Source>운영 사양 로컬 측정, BE 1 vCPU 2GB, MySQL 2 vCPU 4GB</Source>
  </Slide>
);

/* Infra */

const BigStat = ({ value, label, note }: { value: ReactNode; label: string; note: ReactNode }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: 76, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: track.display, lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: 28, fontWeight: 800, marginTop: 14 }}>{label}</div>
    <div style={{ fontSize: 21, fontWeight: 500, marginTop: 6 }}>{note}</div>
  </div>
);

const InfraCost: Page = () => (
  <Slide>
    <Head chapter="부록 인프라">비용 최적화, 운영 자동화</Head>
    <TagBox left={120} top={320} width={570} height={290} tag="GPU 서빙 비용">
      <div style={{ fontSize: 25, fontWeight: 500, lineHeight: 1.6 }}>
        vLLM, RunPod
        <br />
        <Fill>상시 vs 서버리스 선택과 근거</Fill>
        <br />
        <Fill>절감 방법 (예: 양자화, 유휴 시간 종료)</Fill>
      </div>
    </TagBox>
    <TagBox left={720} top={320} width={570} height={290} tag="서버, DB 비용">
      <div style={{ fontSize: 25, fontWeight: 500, lineHeight: 1.6 }}>
        <Fill>인스턴스 구성과 사양</Fill>
        <br />
        <Fill>절감 방법 (예: 스케줄링, 스팟)</Fill>
      </div>
    </TagBox>
    <TagBox left={120} top={660} width={570} height={290} tag="예산 알림">
      <div style={{ fontSize: 25, fontWeight: 500, lineHeight: 1.6 }}>
        <Fill>임계값 (예: 50, 80, 100%)</Fill>
        <br />
        <Fill>알림 채널, 받는 사람</Fill>
      </div>
    </TagBox>
    <TagBox left={720} top={660} width={570} height={290} tag="확장 계획">
      <div style={{ fontSize: 25, fontWeight: 500, lineHeight: 1.6 }}>
        <Fill>사용자 10배 시 먼저 바꿀 것</Fill>
        <br />
        <Fill>비용이 늘어나는 방식</Fill>
      </div>
    </TagBox>
    <div
      style={{
        position: 'absolute',
        left: 1340,
        top: 300,
        width: 460,
        height: 650,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-accent)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <BigStat value={<Fill>$○○</Fill>} label="월 운영비" note="실제 또는 추정" />
      <BigStat value={<Fill>○%</Fill>} label="예산 대비" note={<>월 예산 <Fill>$○○</Fill></>} />
      <BigStat value={<Fill>○%</Fill>} label="GPU 비중" note="전체 운영비 중" />
    </div>
  </Slide>
);

const IssueRow = ({ stack, problem, found, action }: { stack: string; problem: ReactNode; found: ReactNode; action: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '560px 520px 1fr', gap: 12 }}>
    <div style={{ ...cellBase, ...card, borderRadius: 24, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 20 }}>
      <span style={{ flex: 'none', background: 'var(--osd-text)', color: '#FFFFFF', borderRadius: 10, padding: '4px 12px', fontSize: 20, fontWeight: 800 }}>
        {stack}
      </span>
      <span>{problem}</span>
    </div>
    <div style={{ ...cellBase, ...card, borderRadius: 24, fontWeight: 500 }}>{found}</div>
    <div style={{ ...cellBase, borderRadius: 24, background: 'var(--osd-accent)', fontWeight: 700 }}>{action}</div>
  </div>
);

const ColHead = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: track.label, padding: '0 30px', fontFamily: 'var(--osd-font-display)' }}>{children}</div>
);

const InfraMonitoring: Page = () => (
  <Slide>
    <Head chapter="부록 인프라">테스트, 모니터링으로 찾은 문제</Head>
    <Box left={120} top={290} width={1680} style={{ display: 'grid', gridTemplateColumns: '560px 520px 1fr', gap: 12 }}>
      <ColHead>문제</ColHead>
      <ColHead>발견 경로</ColHead>
      <ColHead>조치, 재발 방지</ColHead>
    </Box>
    <Box left={120} top={336} width={1680} style={{ display: 'grid', gap: 12 }}>
      <IssueRow stack="인프라" problem={<Fill>실제 장애 1건</Fill>} found={<Fill>감지 시각, 알림 경로</Fill>} action={<Fill>복구 시간, 재발 방지책</Fill>} />
      <IssueRow stack="BE" problem={<Fill>예: 느린 쿼리</Fill>} found={<Fill>로그, APM, 메트릭</Fill>} action={<Fill>조치와 전 → 후 수치</Fill>} />
      <IssueRow stack="AI" problem={<Fill>응답 품질 문제 1건</Fill>} found={<Fill>트레이싱, 자동 테스트</Fill>} action={<Fill>조치와 전 → 후 수치</Fill>} />
      <IssueRow stack="FE" problem={<Fill>예: 화면 에러</Fill>} found={<Fill>에러 수집 도구, 사용자 제보</Fill>} action={<Fill>조치와 전 → 후 수치</Fill>} />
    </Box>
  </Slide>
);

export const meta: SlideMeta = {
  title: '니쥬(NeedU) 프로젝트 결과 보고서',
  createdAt: '2026-11-12T01:10:14.351Z',
};

export default [
  Cover,
  Contents,
  // 01 프로젝트 팀 구성 및 역할
  Ch01,
  Team,
  // 02 프로젝트 개요
  Ch02,
  Era,
  GiftProblem,
  InfoGap,
  Answer,
  // 03 프로젝트 수행 경과 (사용자 흐름별, 스택은 관여한 곳에만)
  Ch03,
  FlowIntroA,
  // 흐름 A 메인 페이지
  FeMainFont,
  FeMainLoad,
  // 흐름 A AI 채팅 (AI가 만들고, BE가 전달하고, FE가 보여 줌)
  AiChatFlow,
  AiChatPrompt,
  BeChat,
  FeChat,
  // 흐름 A 취향 분석
  AiTasteExtract,
  AiTasteFix,
  // 흐름 A 상품 목록 (AI가 찾고, FE가 보여 줌)
  AiListIntent,
  AiListFallback,
  FeListQuery,
  FeListLoading,
  FeListVirtual,
  // 흐름 A 메인 페이지 알림
  BeBatch,
  BePush,
  FlowIntroB,
  // 트래픽을 버티는 방법 (CL)
  TrafficIntro,
  ClPools,
  ClValkey,
  ClCutover,
  ClVerify,
  ClLimits,
  // 04 프로젝트 결과
  Ch04,
  Numbers,
  Trend,
  Goals,
  // 05 활용방안 및 기대효과
  Ch05,
  Utilization,
  // 06 자체 평가 의견 및 후기
  Ch06,
  Review,
  // 마무리
  Demo,
  QnA,
  // 부록 A 아키텍처 (발표에서는 넘김)
  AppendixArch,
  ManageArchitecture,
  DeployArchitecture,
  MonitoringArchitecture,
  CICD,
  // 부록 B 스택별 기술 상세 (기존 수행 경과 자료)
  AppendixTech,
  AITech,
  AITrouble,
  AIQuality,
  FEExperience,
  FEImplementation,
  BEChatCheck,
  BEChatFailure,
  BEChatCause,
  BEChatChoice,
  BEChatSolution,
  BEChatResult,
  BEBatchCheck,
  BEBatchMeasure,
  BEBatchFix,
  BEPushCause,
  BEPushSolution,
  BEBatchResult,
  BEBatchSummary,
  BEDesign,
  InfraCost,
  InfraMonitoring,
] satisfies Page[];
