## 목적

모든 서브 에이전트와 스킬이 공통으로 따르는 엔지니어링 정책을 정의한다.

## Zustand 팀 컨벤션

아래 5개만 현재 팀의 최소 필수 규칙으로 사용한다.

1. 스토어 경계
- 페이지 기준이 아니라 도메인 기준으로 스토어를 나눈다.
- 서버 상태 캐싱은 Zustand에 두지 않는다.

2. 조회 규칙
- 컴포넌트에서 스토어 전체 구독을 금지한다.
- 상태 조회는 selector를 사용한다.

3. 업데이트 규칙
- 상태 업데이트는 `set`으로 처리하고 불변성을 유지한다.
- `set`은 1단계 병합만 하므로, 중첩 객체는 명시적으로 병합한다.

4. 스토어 기본 형태
- 상태(state)와 액션(actions)은 같은 스토어에 둔다.
- TypeScript 타입을 명시한다.

5. 초기화/리셋
- 각 스토어에 reset 액션을 제공한다.
- 필요 시 `store.getInitialState()`로 초기 상태를 복원한다.

## 강제 규칙

- 모든 에이전트(기본/스킬)는 Zustand 코드를 생성하기 전에 이 파일을 먼저 참조해야 한다.
- 디렉토리/파일 네이밍에서 인위적인 접두어/접미어 사용을 금지한다.
- 네이밍은 역할 중심의 단일 명사(`header`, `sidebar`, `map`)를 사용한다.
- 컴포넌트/함수 선언은 function 선언문 대신 화살표 함수로 작성한다.
- 나머지 세부 규칙은 업무 진행 중 필요 시 합의 후 추가한다.

## 참고 자료

- https://github.com/pmndrs/zustand#recipes
- https://raw.githubusercontent.com/pmndrs/zustand/main/docs/guides/slices-pattern.md
- https://raw.githubusercontent.com/pmndrs/zustand/main/docs/guides/updating-state.md
- https://raw.githubusercontent.com/pmndrs/zustand/main/docs/guides/prevent-rerenders-with-use-shallow.md
- https://raw.githubusercontent.com/pmndrs/zustand/main/docs/guides/how-to-reset-state.md
