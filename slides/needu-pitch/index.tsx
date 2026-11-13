import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

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
import filmReason from './assets/film-reason.webp';

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

const PageNo = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        right: 100,
        bottom: 44,
        fontSize: 20,
        fontWeight: 600,
        color: muted,
        letterSpacing: '0.08em',
      }}
    >
      {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
};

const BrandTag = () => (
  <div
    style={{
      position: 'absolute',
      right: 100,
      top: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '0.14em',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <span
      style={{
        width: 14,
        height: 14,
        background: 'var(--osd-text)',
        transform: 'rotate(45deg)',
        display: 'inline-block',
      }}
    />
    니쥬
  </div>
);

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
      wordBreak: 'keep-all',
    }}
  >
    {children}
    <BrandTag />
    <PageNo />
  </div>
);

const Circle = ({
  size,
  left,
  top,
  color,
}: {
  size: number;
  left: number;
  top: number;
  color?: string;
}) => (
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
      letterSpacing: '0.12em',
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

const H = ({
  size,
  children,
  style,
}: {
  size: number;
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.035em',
      margin: 0,
      ...style,
    }}
  >
    {children}
  </h2>
);

const Mark = ({ children }: { children: ReactNode }) => (
  <span style={{ backgroundImage: 'linear-gradient(transparent 58%, #FEE500 58%)' }}>
    {children}
  </span>
);

const P = ({
  size,
  children,
  style,
}: {
  size?: number;
  children: ReactNode;
  style?: CSSProperties;
}) => (
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

const Phone = ({
  src,
  width,
  left,
  top,
  rotate,
}: {
  src: string;
  width: number;
  left: number;
  top: number;
  rotate?: number;
}) => (
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
    <img
      src={src}
      alt=""
      style={{
        display: 'block',
        width: '100%',
        aspectRatio: '860 / 1794',
        objectFit: 'cover',
        borderRadius: width * 0.13 - 10,
        background: surface,
      }}
    />
  </div>
);

const Pill = ({
  children,
  dark,
  size,
}: {
  children: ReactNode;
  dark?: boolean;
  size?: number;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '12px 26px',
      borderRadius: 999,
      fontSize: size ?? 26,
      fontWeight: 700,
      background: dark ? 'var(--osd-text)' : surface,
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

/* ───────────────────────── 01 Cover ───────────────────────── */

const Cover: Page = () => (
  <Slide>
    <Circle size={1000} left={1010} top={40} />
    <Circle size={200} left={860} top={800} color={warm} />
    <Box left={120} top={170} width={900}>
      <Eyebrow>서비스 소개</Eyebrow>
      <img src={logo} alt="NeedU" style={{ display: 'block', width: 520, marginTop: 44 }} />
      <H size={104} style={{ marginTop: 44, lineHeight: 1.16 }}>
        대화로 발견하는
        <br />
        나만의 취향.
      </H>
      <P size={40} style={{ marginTop: 36, color: 'var(--osd-text)', fontWeight: 600 }}>
        좋아하는 것을 설명하지 못해도 괜찮습니다.
      </P>
      <div style={{ marginTop: 52 }}>
        <Pill dark>needu.gift →</Pill>
      </div>
    </Box>
    <Phone src={screenChat1} width={410} left={1290} top={120} rotate={6} />
    <img
      src={mascot}
      alt=""
      style={{ position: 'absolute', left: 1010, top: 590, width: 380, rotate: '-8deg' }}
    />
  </Slide>
);

/* ───────────────────────── 02 Problem ───────────────────────── */

const Bubble = ({ left, top, children }: { left: number; top: number; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      ...card,
      borderRadius: '36px 36px 36px 8px',
      padding: '22px 36px',
      fontSize: 30,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      boxShadow: '0 14px 30px rgba(21,21,21,0.06)',
    }}
  >
    {children}
  </div>
);

const Problem: Page = () => (
  <Slide>
    <Circle size={560} left={1260} top={390} />
    <img
      src={mascotWorried}
      alt=""
      style={{ position: 'absolute', left: 1320, top: 440, width: 460 }}
    />
    <Box left={120} top={110}>
      <Eyebrow>문제</Eyebrow>
    </Box>
    <Box left={110} top={180}>
      <H size={150}>“무엇을 좋아하세요?”</H>
    </Box>
    <Box left={120} top={400} width={1080}>
      <H size={52} style={{ fontFamily: 'var(--osd-font-body)', letterSpacing: '-0.02em' }}>
        우리는 생각보다 <Mark>자신의 취향을 잘 모릅니다.</Mark>
      </H>
      <P style={{ marginTop: 24 }}>
        간단해 보이는 질문이지만 막상 답하려면 어렵습니다.
        <br />
        나를 위한 선택도, 누군가를 위한 선물도 같은 자리에서 막힙니다.
      </P>
    </Box>
    <Bubble left={120} top={650}>요즘 나에게 필요한 건 뭘까?</Bubble>
    <Bubble left={330} top={760}>그 친구는 어떤 선물을 좋아할까?</Bubble>
    <Bubble left={120} top={870}>상품이 너무 많은데, 일일이 찾아보기는 귀찮아.</Bubble>
  </Slide>
);

/* ───────────────────────── 03 Existing recommendations ───────────────────────── */

const AssumeRow = ({ name, need }: { name: string; need: string }) => (
  <div
    style={{
      ...card,
      height: 112,
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
    }}
  >
    <div style={{ width: 300, fontSize: 32, fontWeight: 800 }}>{name}</div>
    <div style={{ fontSize: 28, color: muted, fontWeight: 500 }}>{need}</div>
  </div>
);

const ApproachStep = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
    <Num n={n} dark />
    <div>
      <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: 26, fontWeight: 500, marginTop: 6, lineHeight: 1.45 }}>{desc}</div>
    </div>
  </div>
);

const Existing: Page = () => (
  <Slide>
    <Box left={120} top={110} width={1000}>
      <Eyebrow>기존 추천의 한계</Eyebrow>
      <H size={76} style={{ marginTop: 32 }}>
        선택지는 늘었지만,
        <br />
        이해는 그대로입니다.
      </H>
      <P size={30} style={{ marginTop: 28 }}>
        기존 방식은 사용자가 원하는 것을 이미 알고, 설명할 수 있다고 전제합니다.
      </P>
    </Box>
    <Box left={120} top={470} width={1000} style={{ display: 'grid', gap: 16 }}>
      <AssumeRow name="카테고리 탐색" need="원하는 분류를 이미 알고 있어야 합니다" />
      <AssumeRow name="키워드 검색" need="취향을 검색어로 표현할 수 있어야 합니다" />
      <AssumeRow name="구매 이력 추천" need="충분한 과거 데이터가 있어야 합니다" />
      <AssumeRow name="취향 설문" need="스스로 취향을 정의할 수 있어야 합니다" />
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 1190,
        top: 130,
        width: 610,
        height: 834,
        borderRadius: 56,
        background: 'var(--osd-accent)',
        padding: '56px 52px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.14em',
          fontFamily: 'var(--osd-font-display)',
        }}
      >
        니쥬의 접근
      </div>
      <H size={50} style={{ marginTop: 20, fontFamily: 'var(--osd-font-body)', lineHeight: 1.25 }}>
        설명하지 못해도
        <br />
        괜찮습니다.
      </H>
      <div style={{ display: 'grid', gap: 44, marginTop: 64 }}>
        <ApproachStep n="1" title="먼저 대화합니다" desc="취향을 묻지 않고 일상을 듣습니다" />
        <ApproachStep n="2" title="그다음 이해합니다" desc="이야기 속 취향과 관심사를 찾습니다" />
        <ApproachStep n="3" title="마지막에 추천합니다" desc="이해한 만큼만, 이유와 함께 권합니다" />
      </div>
    </div>
  </Slide>
);

/* ───────────────────────── 04 Perspective ───────────────────────── */

const Perspective: Page = () => (
  <Slide>
    <Circle size={1560} left={180} top={-240} />
    <Circle size={150} left={130} top={820} color={warm} />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Eyebrow>우리의 관점</Eyebrow>
      <H size={108} style={{ marginTop: 48, fontFamily: 'var(--osd-font-body)', lineHeight: 1.2 }}>
        좋은 추천은
        <br />
        좋은 이해에서 시작됩니다.
      </H>
      <P size={34} style={{ marginTop: 48, color: 'var(--osd-text)' }}>
        추천 알고리즘보다 먼저, 사람을 이해하는 과정이 필요합니다.
      </P>
    </div>
  </Slide>
);

/* ───────────────────────── 05 Introducing ───────────────────────── */

const Introducing: Page = () => (
  <Slide>
    <Circle size={900} left={-120} top={330} />
    <Phone src={screenHome} width={360} left={130} top={190} rotate={-6} />
    <Phone src={screenChat1} width={410} left={480} top={110} />
    <Box left={1010} top={230} width={800}>
      <Eyebrow>니쥬 소개</Eyebrow>
      <H size={100} style={{ marginTop: 36 }}>
        니쥬를 소개합니다.
      </H>
      <P size={42} style={{ marginTop: 36, color: 'var(--osd-text)', fontWeight: 700, lineHeight: 1.4 }}>
        대화를 통해 취향을 발견하는
        <br />
        개인화 추천 서비스.
      </P>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 56 }}>
        <Pill>자연스러운 대화</Pill>
        <Pill>취향·관심사 발견</Pill>
        <Pill>개인화 상품 추천</Pill>
        <Pill>선물 추천</Pill>
        <Pill dark>추천 이유 제공</Pill>
      </div>
    </Box>
  </Slide>
);

/* ───────────────────────── 06 How it works ───────────────────────── */

const JourneyNode = ({
  left,
  top,
  n,
  title,
  desc,
  tone,
}: {
  left: number;
  top: number;
  n: string;
  title: string;
  desc: ReactNode;
  tone: 'yellow' | 'black' | 'white';
}) => (
  <div style={{ position: 'absolute', left, top, width: 320, textAlign: 'center' }}>
    <div
      style={{
        width: 150,
        height: 150,
        margin: '0 auto',
        borderRadius: '50%',
        boxSizing: 'border-box',
        background:
          tone === 'yellow' ? 'var(--osd-accent)' : tone === 'black' ? 'var(--osd-text)' : surface,
        color: tone === 'black' ? '#FFFFFF' : 'var(--osd-text)',
        border: tone === 'white' ? '4px solid var(--osd-text)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 56,
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
      }}
    >
      {n}
    </div>
    <div style={{ fontSize: 36, fontWeight: 800, marginTop: 28 }}>{title}</div>
    <div style={{ fontSize: 26, color: muted, fontWeight: 500, lineHeight: 1.45, marginTop: 10 }}>
      {desc}
    </div>
  </div>
);

const HowItWorks: Page = () => (
  <Slide>
    <Box left={120} top={110} width={1500}>
      <Eyebrow>이용 흐름</Eyebrow>
      <H size={80} style={{ marginTop: 32 }}>
        대화에서 <Mark>발견</Mark>까지.
      </H>
      <P style={{ marginTop: 24 }}>사용자는 이야기만 합니다. 나머지는 니쥬가 이어 갑니다.</P>
    </Box>
    <svg
      width="1920"
      height="1080"
      style={{ position: 'absolute', left: 0, top: 0 }}
      aria-hidden="true"
    >
      <path
        d="M 290 555 C 460 555, 460 645, 625 645 S 795 555, 960 555 S 1130 645, 1295 645 S 1465 555, 1630 555"
        fill="none"
        stroke="#151515"
        strokeWidth="4"
        strokeDasharray="4 16"
        strokeLinecap="round"
      />
    </svg>
    <JourneyNode left={130} top={480} n="1" tone="yellow" title="대화하기" desc={<>니쥬와 일상을<br />이야기합니다</>} />
    <JourneyNode left={465} top={570} n="2" tone="white" title="취향 발견" desc={<>대화 속 관심사와<br />취향을 찾습니다</>} />
    <JourneyNode left={800} top={480} n="3" tone="yellow" title="취향 프로필" desc={<>발견한 내용을<br />확인하고 고칩니다</>} />
    <JourneyNode left={1135} top={570} n="4" tone="white" title="상품 탐색" desc={<>취향에 맞는<br />상품을 찾습니다</>} />
    <JourneyNode left={1470} top={480} n="5" tone="black" title="추천과 이유" desc={<>결과와 추천 이유를<br />함께 확인합니다</>} />
  </Slide>
);

/* ───────────────────────── 07 Natural conversation ───────────────────────── */

const Conversation: Page = () => (
  <Slide>
    <Circle size={760} left={-40} top={240} />
    <Phone src={screenChat2} width={410} left={170} top={110} rotate={-4} />
    <Box left={760} top={120} width={1040}>
      <Eyebrow>자연스러운 대화</Eyebrow>
      <H size={76} style={{ marginTop: 32 }}>
        당신의 이야기가
        <br />
        취향이 됩니다.
      </H>
      <P size={30} style={{ marginTop: 28 }}>
        좋아하는 브랜드나 색을 나열하지 않아도 됩니다.
        <br />
        니쥬는 설문 대신 오늘 있었던 일을 묻습니다.
      </P>
    </Box>
    <Box left={760} top={530} width={1040}>
      <div
        style={{
          ...card,
          display: 'inline-block',
          borderRadius: '32px 32px 32px 8px',
          padding: '22px 34px',
          fontSize: 30,
          fontWeight: 600,
        }}
      >
        최근에 피식 웃음이 났던 일은 어떤 게 있었어요?
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <div
          style={{
            background: 'var(--osd-accent)',
            borderRadius: '32px 32px 8px 32px',
            padding: '22px 34px',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          그냥 조용한 카페에서 책 읽을 때 웃음이 나왔어
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 64 }}>
        <span style={{ fontSize: 24, fontWeight: 700, color: muted, marginRight: 8 }}>
          이 대화에서 발견한 취향
        </span>
        <Pill size={24}>구석진 카페 자리</Pill>
        <Pill size={24}>모던한 분위기의 카페</Pill>
        <Pill size={24}>아이스 아메리카노</Pill>
      </div>
    </Box>
  </Slide>
);

/* ───────────────────────── 08 Understanding taste ───────────────────────── */

const Tile = ({ title, desc, accent }: { title: string; desc: string; accent?: boolean }) => (
  <div
    style={{
      ...card,
      background: accent ? 'var(--osd-accent)' : surface,
      border: accent ? 'none' : card.border,
      height: 150,
      padding: '0 32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div style={{ fontSize: 32, fontWeight: 800 }}>{title}</div>
    <div
      style={{
        fontSize: 23,
        fontWeight: 500,
        marginTop: 8,
        color: accent ? 'var(--osd-text)' : muted,
      }}
    >
      {desc}
    </div>
  </div>
);

const Understanding: Page = () => (
  <Slide>
    <Circle size={720} left={1300} top={300} />
    <Phone src={screenProfile} width={400} left={1400} top={120} rotate={4} />
    <Box left={120} top={110} width={1180}>
      <Eyebrow>취향 이해</Eyebrow>
      <H size={80} style={{ marginTop: 32 }}>
        말하지 않은 취향까지 <Mark>발견합니다.</Mark>
      </H>
      <P style={{ marginTop: 28 }}>
        대화에서 찾은 단서는 사용자가 읽을 수 있는 취향 정보로 정리됩니다.
        <br />
        맞지 않는 항목은 직접 지우거나 고칠 수 있습니다.
      </P>
    </Box>
    <Box
      left={120}
      top={610}
      width={1200}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}
    >
      <Tile title="관심사" desc="무엇에 마음이 가는가" accent />
      <Tile title="취향" desc="그 안에서 무엇을 더 좋아하는가" accent />
      <Tile title="비선호" desc="피하고 싶은 것" />
      <Tile title="제약 조건" desc="쓸 수 없거나 맞지 않는 것" />
      <Tile title="상황과 목적" desc="언제, 어디서, 왜 좋아하는가" />
      <Tile title="예산" desc="추천 화면에서 직접 조절" />
    </Box>
  </Slide>
);

/* ───────────────────────── 09 Personalized recommendations ───────────────────────── */

const FeatureRow = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
    <Num n={n} />
    <div>
      <div style={{ fontSize: 34, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 26, color: muted, fontWeight: 500, marginTop: 6 }}>{desc}</div>
    </div>
  </div>
);

const Personalized: Page = () => (
  <Slide>
    <Circle size={840} left={1180} top={180} />
    <Circle size={170} left={1040} top={110} color={warm} />
    <Phone src={screenSelf} width={420} left={1300} top={100} rotate={5} />
    <Box left={120} top={130} width={960}>
      <Eyebrow>개인화 추천</Eyebrow>
      <H size={104} style={{ marginTop: 36 }}>
        내 취향에
        <br />
        꼭 맞게.
      </H>
      <P style={{ marginTop: 32 }}>
        대화가 끝나면 발견한 취향이 곧바로 상품 목록이 됩니다.
      </P>
      <div style={{ display: 'grid', gap: 36, marginTop: 64 }}>
        <FeatureRow n="01" title="취향으로 찾는 상품" desc="단어가 아니라 의미가 가까운 상품을 고릅니다" />
        <FeatureRow n="02" title="직접 조절하는 예산" desc="슬라이더로 가격 범위를 좁혀 볼 수 있습니다" />
        <FeatureRow n="03" title="실제로 살 수 있는 상품" desc="7,969개 상품 카탈로그 안에서 추천합니다" />
      </div>
    </Box>
  </Slide>
);

/* ───────────────────────── 10 Gift recommendation ───────────────────────── */

const ModeLine = ({ label, value }: { label: string; value: string }) => (
  <div style={{ marginTop: 24 }}>
    <div style={{ fontSize: 22, fontWeight: 700, opacity: 0.6 }}>{label}</div>
    <div style={{ fontSize: 28, fontWeight: 700, marginTop: 4, lineHeight: 1.35 }}>{value}</div>
  </div>
);

const Gift: Page = () => (
  <Slide>
    <Box left={120} top={100} width={1500}>
      <Eyebrow>선물 추천</Eyebrow>
      <H size={76} style={{ marginTop: 28 }}>
        선물을 고르는 <Mark>더 좋은 방법.</Mark>
      </H>
    </Box>
    {/* SELF */}
    <div style={{ position: 'absolute', left: 120, top: 320, width: 820, height: 650, ...card }} />
    <Phone src={screenSelf} width={262} left={164} top={364} />
    <Box left={476} top={372} width={420}>
      <Pill dark size={22}>나를 위한 추천</Pill>
      <H size={46} style={{ marginTop: 28, fontFamily: 'var(--osd-font-body)', lineHeight: 1.25 }}>
        지금 나에게
        <br />
        필요한 것
      </H>
      <ModeLine label="보는 사람" value="본인" />
      <ModeLine label="고르는 기준" value="지금의 관심과 필요" />
      <ModeLine label="취향 신호" value="최근 대화일수록 크게 반영" />
    </Box>
    {/* GIFT */}
    <div
      style={{
        position: 'absolute',
        left: 980,
        top: 320,
        width: 820,
        height: 650,
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-accent)',
      }}
    />
    <Phone src={screenGift} width={262} left={1024} top={364} />
    <Box left={1336} top={372} width={420}>
      <Pill dark size={22}>친구를 위한 추천</Pill>
      <H size={46} style={{ marginTop: 28, fontFamily: 'var(--osd-font-body)', lineHeight: 1.25 }}>
        받으면
        <br />
        기쁜 것
      </H>
      <ModeLine label="보는 사람" value="선물하는 친구" />
      <ModeLine label="고르는 기준" value="선물할 수 있는 상품만" />
      <ModeLine label="취향 신호" value="갖고 싶지만 미뤄 둔 것에 가중" />
    </Box>
  </Slide>
);

/* ───────────────────────── 11 Explainable ───────────────────────── */

const Rule = ({ title, desc }: { title: string; desc: ReactNode }) => (
  <div style={{ borderTop: '4px solid var(--osd-text)', paddingTop: 20 }}>
    <div style={{ fontSize: 30, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 24, color: muted, fontWeight: 500, marginTop: 10, lineHeight: 1.45 }}>
      {desc}
    </div>
  </div>
);

const Explainable: Page = () => (
  <Slide>
    <Circle size={520} left={-180} top={700} />
    <Box left={120} top={150} width={720}>
      <Eyebrow>설명하는 추천</Eyebrow>
      <H size={100} style={{ marginTop: 40 }}>
        무엇을,
        <br />
        그리고
        <br />
        <Mark>왜 추천하는지.</Mark>
      </H>
      <P style={{ marginTop: 40 }}>
        상품만 건네지 않습니다.
        <br />
        어떤 취향과 이어지는지 함께 말합니다.
      </P>
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 900,
        top: 140,
        width: 900,
        ...card,
        padding: 30,
        boxShadow: '0 30px 60px rgba(21,21,21,0.08)',
      }}
    >
      <img src={filmReason} alt="" style={{ display: 'block', width: '100%', borderRadius: 16 }} />
    </div>
    <Box left={900} top={648} width={900}>
      <div style={{ fontSize: 20, color: muted, fontWeight: 500 }}>
        화면: 니쥬 2차 버전 소개 영상 · 가상 프로필 예시
      </div>
    </Box>
    <Box
      left={900}
      top={730}
      width={900}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
    >
      <Rule title="연결을 말합니다" desc={<>어떤 취향과 이어지는지<br />한 문장으로 씁니다</>} />
      <Rule title="지어내지 않습니다" desc={<>상품명에 없는 성능과<br />효과는 쓰지 않습니다</>} />
      <Rule title="공개 범위를 지킵니다" desc={<>친구에게는 공개 가능한<br />취향만 보여 줍니다</>} />
    </Box>
  </Slide>
);

/* ───────────────────────── 12 Experience design ───────────────────────── */

const Shift = ({ from, to, why }: { from: string; to: string; why: string }) => (
  <div style={{ ...card, height: 186, padding: '0 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
      <span style={{ fontSize: 26, color: muted, fontWeight: 600, textDecoration: 'line-through' }}>
        {from}
      </span>
      <span style={{ fontSize: 30, fontWeight: 800 }}>→</span>
      <span style={{ fontSize: 36, fontWeight: 800 }}>
        <Mark>{to}</Mark>
      </span>
    </div>
    <div style={{ fontSize: 26, color: muted, fontWeight: 500, marginTop: 16 }}>{why}</div>
  </div>
);

const ExperienceDesign: Page = () => (
  <Slide>
    <Circle size={640} left={-200} top={640} />
    <img src={mascot} alt="" style={{ position: 'absolute', left: 150, top: 690, width: 300 }} />
    <Box left={120} top={130} width={680}>
      <Eyebrow>경험 설계</Eyebrow>
      <H size={76} style={{ marginTop: 36 }}>
        양식이 아니라
        <br />
        사람을 중심으로
        <br />
        설계했습니다.
      </H>
      <P size={30} style={{ marginTop: 32 }}>
        편하게 말할 수 있어야
        <br />
        취향이 드러납니다.
      </P>
    </Box>
    <Box left={860} top={120} width={940} style={{ display: 'grid', gap: 20 }}>
      <Shift from="취향을 캐묻는 질문" to="경험을 듣는 대화" why="좋아하는 것을 묻는 대신 최근의 하루를 묻습니다." />
      <Shift from="끝없이 이어지는 질문" to="쉬어 가는 리듬" why="매번 질문으로 끝내지 않고 반응만 건네는 턴을 둡니다." />
      <Shift from="일방적인 분석 결과" to="확인하고 고치는 프로필" why="‘이렇게 기억하려 해요’에 맞아요·틀려요로 답합니다." />
      <Shift from="정보가 차면 종료" to="흐름을 존중하는 마무리" why="대화가 즐거운 동안에는 먼저 끊지 않습니다." />
    </Box>
  </Slide>
);

/* ───────────────────────── 13 Product interface ───────────────────────── */

const ScreenLabel = ({ left, top, children }: { left: number; top: number; children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: 264,
      textAlign: 'center',
      fontSize: 26,
      fontWeight: 700,
    }}
  >
    {children}
  </div>
);

const Interface: Page = () => (
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
      <H size={76}>니쥬 화면 살펴보기</H>
      <P size={30} style={{ marginTop: 18 }}>
        needu.gift에서 실제로 동작하는 화면입니다.
      </P>
    </Box>
    <Phone src={screenHome} width={264} left={170} top={340} />
    <Phone src={screenChat2} width={264} left={499} top={290} />
    <Phone src={screenProfile} width={264} left={828} top={340} />
    <Phone src={screenSelf} width={264} left={1157} top={290} />
    <Phone src={screenGift} width={264} left={1486} top={340} />
    <ScreenLabel left={170} top={930}>홈</ScreenLabel>
    <ScreenLabel left={499} top={880}>대화</ScreenLabel>
    <ScreenLabel left={828} top={930}>취향 확인</ScreenLabel>
    <ScreenLabel left={1157} top={880}>나를 위한 추천</ScreenLabel>
    <ScreenLabel left={1486} top={930}>선물 추천</ScreenLabel>
  </Slide>
);

/* ───────────────────────── 14 Architecture ───────────────────────── */

const Node = ({
  left,
  top,
  width,
  height,
  title,
  sub,
  tone,
}: {
  left: number;
  top: number;
  width: number;
  height?: number;
  title: string;
  sub: ReactNode;
  tone?: 'yellow' | 'black' | 'white';
}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width,
      height: height ?? 150,
      boxSizing: 'border-box',
      borderRadius: 26,
      background: tone === 'yellow' ? 'var(--osd-accent)' : tone === 'black' ? 'var(--osd-text)' : surface,
      color: tone === 'black' ? '#FFFFFF' : 'var(--osd-text)',
      border: tone === 'white' || !tone ? '2.5px solid var(--osd-text)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 12px',
    }}
  >
    <div style={{ fontSize: 27, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 21, fontWeight: 500, marginTop: 8, lineHeight: 1.35, opacity: 0.75 }}>
      {sub}
    </div>
  </div>
);

const Architecture: Page = () => (
  <Slide>
    <Box left={120} top={100} width={1500}>
      <Eyebrow>시스템 구조</Eyebrow>
      <H size={60} style={{ marginTop: 26 }}>
        경험 뒤에서 니쥬가 동작하는 방식
      </H>
    </Box>
    <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0 }} aria-hidden="true">
      <defs>
        <marker id="needu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#151515" />
        </marker>
      </defs>
      <g stroke="#151515" strokeWidth="3" fill="none" markerEnd="url(#needu-arrow)">
        <path d="M 382 400 H 436" />
        <path d="M 702 400 H 756" />
        <path d="M 1462 400 H 1516" />
        <path d="M 925 532 V 636" />
        <path d="M 1295 532 V 636" />
        <path d="M 1410 532 V 584 H 1660 V 636" />
        <path d="M 1295 866 V 796" />
      </g>
    </svg>
    <Node left={120} top={325} width={260} title="모바일 웹" sub="needu.gift" tone="yellow" />
    <Node left={440} top={325} width={260} title="서비스 백엔드" sub={<>Spring · MySQL<br />회원 · 친구 · 추천 저장</>} />
    {/* AI server container */}
    <div
      style={{
        position: 'absolute',
        left: 760,
        top: 270,
        width: 700,
        height: 260,
        boxSizing: 'border-box',
        borderRadius: 34,
        background: softYellow,
        border: '2.5px dashed var(--osd-text)',
      }}
    />
    <Box left={790} top={286}>
      <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.04em' }}>AI 서버 · FastAPI</span>
    </Box>
    <Node left={785} top={340} width={205} height={160} title="대화" sub={<>응답 스트리밍<br />취향 추출·판단</>} />
    <Node left={1008} top={340} width={205} height={160} title="추천" sub={<>검색 · 랭킹<br />추천 이유</>} />
    <Node left={1231} top={340} width={205} height={160} title="모델 게이트웨이" sub={<>장애 시<br />예비 모델 전환</>} />
    <Node left={1520} top={325} width={280} title="언어 모델 서빙" sub={<>응답 · 추출 · 판단 모델<br />vLLM(RunPod) + 예비 경로</>} tone="black" />
    <Node left={760} top={640} width={330} title="Redis" sub="대화 세션 · 검색 의도 캐시" />
    <Node left={1130} top={640} width={330} title="PostgreSQL + pgvector" sub="상품 문서 · 벡터 카탈로그" />
    <Node left={1520} top={640} width={280} title="임베딩 API" sub="Upstage Solar Embedding" />
    <div
      style={{
        position: 'absolute',
        left: 440,
        top: 870,
        width: 1020,
        height: 96,
        boxSizing: 'border-box',
        borderRadius: 26,
        border: '2.5px dashed var(--osd-text)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        fontSize: 24,
        fontWeight: 700,
      }}
    >
      <span style={{ background: 'var(--osd-accent)', padding: '6px 16px', borderRadius: 999, fontSize: 21 }}>
        카탈로그 배치
      </span>
      상품 원본 동기화 → 상품 문서 생성 → 임베딩 → 저장
    </div>
    <Box left={120} top={540} width={560}>
      <P size={25}>
        화면은 저장된 추천을 꺼내 보여 주고,
        <br />
        AI는 대화와 추천 생성에만 쓰입니다.
      </P>
    </Box>
  </Slide>
);

/* ───────────────────────── 15 Pipeline ───────────────────────── */

const StepCard = ({
  n,
  title,
  desc,
  tone,
}: {
  n: string;
  title: string;
  desc: ReactNode;
  tone?: 'yellow' | 'black';
}) => (
  <div
    style={{
      ...card,
      height: 210,
      padding: '0 32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: tone === 'yellow' ? 'var(--osd-accent)' : tone === 'black' ? 'var(--osd-text)' : surface,
      color: tone === 'black' ? '#FFFFFF' : 'var(--osd-text)',
      border: tone ? 'none' : card.border,
    }}
  >
    <div style={{ fontSize: 20, fontWeight: 800, opacity: 0.55, fontFamily: 'var(--osd-font-display)' }}>
      {n}단계
    </div>
    <div style={{ fontSize: 34, fontWeight: 800, marginTop: 8 }}>{title}</div>
    <div style={{ fontSize: 24, fontWeight: 500, marginTop: 10, lineHeight: 1.4, opacity: 0.72 }}>
      {desc}
    </div>
  </div>
);

const Pipeline: Page = () => (
  <Slide>
    <Box left={120} top={100} width={1600}>
      <Eyebrow>대화에서 추천까지</Eyebrow>
      <H size={72} style={{ marginTop: 28 }}>
        한 번의 대화, <Mark>나만을 위한 결과.</Mark>
      </H>
    </Box>
    <Box
      left={120}
      top={350}
      width={1680}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
    >
      <StepCard n="1" title="대화" desc={<>니쥬와 일상적인<br />이야기를 나눕니다</>} tone="yellow" />
      <StepCard n="2" title="취향 추출" desc={<>후보를 찾고 좋아함과<br />싫어함을 판단합니다</>} />
      <StepCard n="3" title="취향 프로필" desc={<>정리된 취향을<br />사용자가 확인합니다</>} />
      <StepCard n="4" title="상품 검색" desc={<>취향과 의미가 가까운<br />상품을 찾습니다</>} />
      <StepCard n="5" title="필터 · 랭킹" desc={<>비선호와 제약을 빼고<br />순서를 정합니다</>} />
      <StepCard n="6" title="추천 이유" desc={<>취향과 상품의 연결을<br />문장으로 씁니다</>} />
      <StepCard n="7" title="추천 결과" desc={<>나를 위한 목록과<br />선물 목록이 만들어집니다</>} tone="black" />
      <div style={{ height: 210, padding: '0 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.4 }}>
          표현은 모델이,
          <br />
          결정은 코드가 맡습니다.
        </div>
      </div>
    </Box>
    <Box left={120} top={860} width={1680} style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Pill dark size={22}>모델</Pill>
        <span style={{ fontSize: 26, fontWeight: 600 }}>대화 생성 · 후보 추출 · 태도 판단 · 추천 이유</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Pill size={22}>코드</Pill>
        <span style={{ fontSize: 26, fontWeight: 600 }}>저장 위치 결정 · 필터 · 랭킹</span>
      </div>
    </Box>
  </Slide>
);

/* ───────────────────────── 16 Product intelligence ───────────────────────── */

const DocRow = ({ label, text }: { label: string; text: string }) => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
    <span
      style={{
        flex: 'none',
        width: 92,
        textAlign: 'center',
        padding: '8px 0',
        borderRadius: 999,
        background: 'var(--osd-accent)',
        fontSize: 24,
        fontWeight: 800,
      }}
    >
      {label}
    </span>
    <span style={{ fontSize: 26, fontWeight: 500, lineHeight: 1.45, paddingTop: 4 }}>{text}</span>
  </div>
);

const Stat = ({ value, label }: { value: string; label: ReactNode }) => (
  <div>
    <div style={{ fontSize: 84, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: '-0.04em', lineHeight: 1 }}>
      {value}
    </div>
    <div style={{ fontSize: 24, color: muted, fontWeight: 600, marginTop: 14, lineHeight: 1.35 }}>{label}</div>
  </div>
);

const Intelligence: Page = () => (
  <Slide>
    <Box left={120} top={120} width={740}>
      <Eyebrow>상품 이해</Eyebrow>
      <H size={80} style={{ marginTop: 36 }}>
        사람과
        <br />
        상품을
        <br />
        <Mark>잇습니다.</Mark>
      </H>
      <P size={30} style={{ marginTop: 32 }}>
        사람의 말과 상품의 말은 다릅니다.
        <br />
        그 사이를 의미로 잇습니다.
      </P>
    </Box>
    <Box left={120} top={760} width={740} style={{ display: 'flex', gap: 64 }}>
      <Stat value="7,969" label="추천 대상 상품" />
      <Stat value="3" label={<>상품마다 쓰는<br />설명 문서</>} />
      <Stat value="2" label={<>단계 검색<br />관심사 → 탐색</>} />
    </Box>
    <div style={{ position: 'absolute', left: 920, top: 130, width: 880, height: 510, ...card, padding: '44px 48px' }}>
      <div style={{ fontSize: 32, fontWeight: 800 }}>상품 하나를 세 가지 관점으로 읽습니다</div>
      <div style={{ fontSize: 24, color: muted, fontWeight: 600, marginTop: 12 }}>
        실제 카탈로그 문서 · 배민상품권 5만원 교환권
      </div>
      <div style={{ display: 'grid', gap: 30, marginTop: 40 }}>
        <DocRow label="내용" text="배달 앱에서 음식을 주문할 때 쓰는 금액권. 배달 음식과 간편 주문 취향에 맞는다." />
        <DocRow label="사용" text="집에서 쉬는 저녁이나 야식 시간에 배달 주문 결제에 쓴다." />
        <DocRow label="선물" text="먹고 싶은 메뉴를 직접 골라 주문할 수 있어 취향을 몰라도 고르기 편하다." />
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 920,
        top: 670,
        width: 880,
        height: 290,
        boxSizing: 'border-box',
        borderRadius: 'var(--osd-radius)',
        background: 'var(--osd-accent)',
        padding: '0 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: 36, fontWeight: 800 }}>상품이 없는 관심사는 억지로 채우지 않습니다</div>
      <div style={{ fontSize: 26, fontWeight: 500, marginTop: 14, lineHeight: 1.45 }}>
        가장 가까운 상품조차 기준에 못 미치면, 맥락을 넓힌
        <br />
        탐색 추천으로 바꾸고 그 사실을 추천 이유에 드러냅니다.
      </div>
    </div>
  </Slide>
);

/* ───────────────────────── 17 Engineering challenges ───────────────────────── */

const cellBase: CSSProperties = {
  fontSize: 25,
  lineHeight: 1.4,
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  padding: '0 30px',
  height: 138,
  boxSizing: 'border-box',
};

const ChallengeRow = ({ problem, decision, result }: { problem: ReactNode; decision: ReactNode; result: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '470px 640px 546px', gap: 12 }}>
    <div style={{ ...cellBase, ...card, borderRadius: 24 }}>{problem}</div>
    <div style={{ ...cellBase, ...card, borderRadius: 24, fontWeight: 500 }}>{decision}</div>
    <div style={{ ...cellBase, borderRadius: 24, background: 'var(--osd-accent)', fontWeight: 700 }}>{result}</div>
  </div>
);

const ColHead = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.12em', padding: '0 30px', fontFamily: 'var(--osd-font-display)' }}>
    {children}
  </div>
);

const Challenges: Page = () => (
  <Slide>
    <Box left={120} top={100} width={1600}>
      <Eyebrow>구현 과정의 문제 해결</Eyebrow>
      <H size={64} style={{ marginTop: 26 }}>
        아이디어를 <Mark>동작하는 제품</Mark>으로.
      </H>
    </Box>
    <Box left={120} top={316} width={1680} style={{ display: 'grid', gridTemplateColumns: '470px 640px 546px', gap: 12 }}>
      <ColHead>문제</ColHead>
      <ColHead>설계 결정</ColHead>
      <ColHead>결과</ColHead>
    </Box>
    <Box left={120} top={362} width={1680} style={{ display: 'grid', gap: 12 }}>
      <ChallengeRow
        problem={<span>대화가 설문처럼<br />느껴졌습니다</span>}
        decision={<span>규칙 목록을 성격 소개글로 바꾸고,<br />이번 턴의 반응 방식만 코드가 정합니다</span>}
        result={<span>시스템 프롬프트<br />2,486자 → 776자</span>}
      />
      <ChallengeRow
        problem={<span>싫다고 한 대상이<br />관심사로 저장됐습니다</span>}
        decision={<span>후보 추출, 태도 판단, 저장 위치 결정을<br />세 단계로 나눴습니다</span>}
        result={<span>같은 대상이 겹치면 비선호 우선<br />도입 전 태도 판정 테스트 15/17</span>}
      />
      <ChallengeRow
        problem={<span>카탈로그에 없는 관심사도<br />상품으로 채워졌습니다</span>}
        decision={<span>검색 1위의 유사도가 기준보다 낮으면<br />탐색 추천으로 전환합니다</span>}
        result={<span>무관한 상품 대신<br />넓혀 본 추천으로 표시</span>}
      />
      <ChallengeRow
        problem={<span>추천 이유에 확인되지 않은<br />장점이 붙을 수 있었습니다</span>}
        decision={<span>취향과의 연결만 쓰게 하고,<br />5개씩 나눠 동시에 생성합니다</span>}
        result={<span>상품명에 없는 성능·효과는<br />쓰지 않는 추천 이유</span>}
      />
    </Box>
  </Slide>
);

/* ───────────────────────── 18 Differentiators ───────────────────────── */

const Diff = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div style={{ display: 'flex', gap: 28, alignItems: 'center', height: 122, borderBottom: `2px solid ${line}` }}>
    <Num n={n} />
    <div>
      <div style={{ fontSize: 34, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 25, color: muted, fontWeight: 500, marginTop: 6 }}>{desc}</div>
    </div>
  </div>
);

const Different: Page = () => (
  <Slide>
    <Circle size={760} left={-240} top={620} />
    <Box left={120} top={150} width={720}>
      <Eyebrow>차별점</Eyebrow>
      <H size={88} style={{ marginTop: 40, lineHeight: 1.2 }}>
        기존 추천을
        <br />
        넘어서는
        <br />
        <Mark>여섯 가지.</Mark>
      </H>
    </Box>
    <Box left={900} top={150} width={900}>
      <Diff n="01" title="검색이 아니라 대화에서 시작합니다" desc="검색어를 떠올릴 필요가 없습니다" />
      <Diff n="02" title="말하지 않은 선호까지 발견합니다" desc="반복하는 행동과 일부러 한 선택에서 취향을 읽습니다" />
      <Diff n="03" title="맥락과 함께 기억합니다" desc="무엇을 좋아하는지와 왜, 언제 좋아하는지를 함께 남깁니다" />
      <Diff n="04" title="나를 위한 추천과 선물을 하나로" desc="한 번의 대화가 두 가지 목록이 됩니다" />
      <Diff n="05" title="이유를 설명합니다" desc="추천마다 어떤 취향과 이어지는지 말합니다" />
      <Diff n="06" title="재촉하지 않습니다" desc="확인과 수정, 대화의 마무리는 사용자가 정합니다" />
    </Box>
  </Slide>
);

/* ───────────────────────── 19 Outcomes ───────────────────────── */

const Outcome = ({ value, label, note, accent, size }: { value: ReactNode; label: string; note: string; accent?: boolean; size?: number }) => (
  <div
    style={{
      ...card,
      height: 290,
      padding: '0 36px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: accent ? 'var(--osd-accent)' : surface,
      border: accent ? 'none' : card.border,
    }}
  >
    <div style={{ fontSize: size ?? 76, fontWeight: 800, fontFamily: 'var(--osd-font-display)', letterSpacing: '-0.04em', lineHeight: 1.05, whiteSpace: 'nowrap' }}>
      {value}
    </div>
    <div style={{ fontSize: 28, fontWeight: 800, marginTop: 20 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 500, marginTop: 8, color: accent ? 'var(--osd-text)' : muted }}>{note}</div>
  </div>
);

const Todo = ({ title }: { title: string }) => (
  <div
    style={{
      height: 122,
      boxSizing: 'border-box',
      borderRadius: 28,
      border: `3px dashed ${muted}`,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: muted,
    }}
  >
    <span style={{ fontSize: 28, fontWeight: 700 }}>{title}</span>
    <span style={{ fontSize: 22, fontWeight: 600 }}>측정 후 입력</span>
  </div>
);

const Outcomes: Page = () => (
  <Slide>
    <Box left={120} top={100} width={1600}>
      <Eyebrow>성과</Eyebrow>
      <H size={72} style={{ marginTop: 26 }}>
        구상에서 <Mark>제품</Mark>으로.
      </H>
    </Box>
    <Box left={120} top={330} width={1680} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <Outcome accent value="1차 → 2차" label="실제 서비스로 공개" note="needu.gift · 카카오 로그인" />
      <Outcome value="7,969" label="상품 카탈로그" note="상품마다 설명 문서 3종과 벡터" />
      <Outcome value="473" label="자동 테스트" note="AI 서버 저장소 기준" />
      <Outcome size={58} value={<>130<span style={{ fontSize: 40 }}> → </span>3,571</>} label="조회 API 초당 최대 처리량" note="백엔드 부하 테스트 · 로컬 환경" />
    </Box>
    <div style={{ position: 'absolute', left: 120, top: 660, width: 816, height: 296, ...card, padding: '36px 40px' }}>
      <div style={{ fontSize: 28, fontWeight: 800 }}>구현을 마친 기능</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 26 }}>
        <Pill size={24}>대화형 취향 발견</Pill>
        <Pill size={24}>취향 확인 · 수정</Pill>
        <Pill size={24}>나를 위한 추천</Pill>
        <Pill size={24}>친구 선물 추천</Pill>
        <Pill size={24}>예산 조절</Pill>
        <Pill size={24}>추천 이유</Pill>
      </div>
    </div>
    <Box left={984} top={660} width={816} style={{ display: 'grid', gap: 24 }}>
      <Todo title="사용자 테스트 결과" />
      <Todo title="추천 품질 평가" />
    </Box>
  </Slide>
);

/* ───────────────────────── 20 Future vision ───────────────────────── */

const Next = ({ title, desc }: { title: string; desc: string }) => (
  <div style={{ background: surface, borderRadius: 28, height: 168, padding: '0 34px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ fontSize: 32, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 24, color: muted, fontWeight: 500, marginTop: 10, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

const Future: Page = () => (
  <Slide>
    <Box left={120} top={100} width={1600}>
      <Eyebrow>앞으로의 방향</Eyebrow>
      <H size={76} style={{ marginTop: 28 }}>
        개인화된 발견의 미래.
      </H>
      <P style={{ marginTop: 22 }}>상품 추천에서 시작해, 나에게 맞는 선택을 발견하도록 돕는 서비스로.</P>
    </Box>
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 400,
        width: 500,
        height: 560,
        boxSizing: 'border-box',
        borderRadius: 48,
        background: 'var(--osd-text)',
        color: '#FFFFFF',
        padding: '48px 44px',
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.14em', color: '#FEE500', fontFamily: 'var(--osd-font-display)' }}>
        현재 · 구현됨
      </div>
      <div style={{ fontSize: 40, fontWeight: 800, marginTop: 20, lineHeight: 1.3 }}>
        대화로 발견한
        <br />
        취향을 상품으로
      </div>
      <div style={{ fontSize: 28, fontWeight: 500, marginTop: 40, lineHeight: 1.9, opacity: 0.85 }}>
        대화형 취향 발견
        <br />
        나를 위한 추천 · 선물 추천
        <br />
        추천 이유
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 660,
        top: 400,
        width: 1140,
        height: 560,
        boxSizing: 'border-box',
        borderRadius: 48,
        background: 'var(--osd-accent)',
        padding: '48px 44px',
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.14em', fontFamily: 'var(--osd-font-display)' }}>
        다음 · 계획
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
        <Next title="오래 볼수록 깊어지는 이해" desc="대화가 쌓일수록 취향의 변화를 따라갑니다" />
        <Next title="맥락을 읽는 추천" desc="같은 취향도 상황과 목적에 따라 다르게 권합니다" />
        <Next title="상품을 넘어 경험으로" desc="추천의 영역을 상품 밖으로 넓힙니다" />
        <Next title="반응으로 나아지는 추천" desc="추천에 대한 반응을 다시 취향 신호로 씁니다" />
      </div>
    </div>
  </Slide>
);

/* ───────────────────────── 21 Closing ───────────────────────── */

const Closing: Page = () => (
  <Slide>
    <Circle size={1000} left={-90} top={40} />
    <Circle size={200} left={860} top={80} color={warm} />
    <Phone src={screenLanding} width={410} left={220} top={120} rotate={-6} />
    <img src={mascot} alt="" style={{ position: 'absolute', left: 560, top: 590, width: 380, rotate: '8deg' }} />
    <Box left={1040} top={220} width={780}>
      <img src={logo} alt="NeedU" style={{ display: 'block', width: 480 }} />
      <H size={84} style={{ marginTop: 48, lineHeight: 1.18 }}>
        당신의 취향을
        <br />
        발견하는 새로운 방법.
      </H>
      <P size={38} style={{ marginTop: 36, color: 'var(--osd-text)', fontWeight: 600 }}>
        대화로 발견하는 나만의 취향.
      </P>
      <div style={{ display: 'flex', gap: 16, marginTop: 56 }}>
        <Pill dark>needu.gift</Pill>
      </div>
      <P size={24} style={{ marginTop: 32, lineHeight: 1.7 }}>
        github.com/100-hours-a-week/KTB4-4th-AI
        <br />
        Team 4주라 · 카카오테크 부트캠프
      </P>
    </Box>
  </Slide>
);

export const meta: SlideMeta = {
  title: '니쥬(NeedU) 서비스 소개',
  createdAt: '2026-11-10T01:29:06.189Z',
};

export default [
  Cover,
  Problem,
  Existing,
  Perspective,
  Introducing,
  HowItWorks,
  Conversation,
  Understanding,
  Personalized,
  Gift,
  Explainable,
  ExperienceDesign,
  Interface,
  Architecture,
  Pipeline,
  Intelligence,
  Challenges,
  Different,
  Outcomes,
  Future,
  Closing,
] satisfies Page[];
