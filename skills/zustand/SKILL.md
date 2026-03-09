---
name: zustand
description: 팀 컨벤션에 맞춰 Zustand 스토어를 구현/리팩터링한다. 새 스토어 생성, 상태 구조 정리, selector 적용, 상태 업데이트 방식 정리 작업에서 사용한다.
---

# Zustand 스킬

1. `agents/root/AGENT.md`를 먼저 읽고 `Zustand 팀 컨벤션`을 적용한다.
2. 스토어는 도메인 기준으로 모델링하고, 상태와 액션을 같은 스토어에 둔다.
3. 컴포넌트에서는 selector를 사용하고 스토어 전체 구독은 피한다.
4. 업데이트는 `set`을 사용해 불변성을 지키고, 중첩 객체는 명시적으로 병합한다.
5. 각 스토어에 reset 액션을 두고 필요 시 `store.getInitialState()`로 초기화한다.
