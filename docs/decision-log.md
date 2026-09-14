# Decision Log

**Version:** 0.2  
**Status:** Active

This file records decisions that materially affect the direction of the Adaptive Portfolio.

Do not record every small implementation choice. Record decisions that would otherwise cause us to ask later:

> **Why did we choose this?**

---

## Decision template

```md
## DXXX — Decision title

**Status:** Proposed | Accepted | Changed | Rejected  
**Date:** YYYY-MM-DD

### Context
What problem are we trying to solve?

### Options considered
1. Option A
2. Option B
3. Option C

### Decision
What are we choosing?

### Why
Why does this choice best fit the core principles?

### Consequences
What does this make easier, harder, or necessary?

### Revisit when
What would cause us to reconsider this decision?
```

---

## D001 — Stable core with adaptive presentation

**Status:** Accepted  
**Date:** 2026-09-12

### Decision
Use a **stable core with an adaptive surface**.

### Why
This preserves authenticity while allowing the portfolio to make relevant experience easier to discover.

---

## D002 — AI assists authoring; visitors receive controlled output

**Status:** Proposed  
**Date:** 2026-09-12

### Decision
AI may propose configurations or content changes, but important job-specific variants should be reviewable and controlled before visitors see them.

### Why
This keeps professional claims accurate and the visitor experience predictable.

---

## D003 — Technology choice is deferred

**Status:** Accepted  
**Date:** 2026-09-12

### Decision
Defer the final technology choice.

### Why
The initial work should validate the stable core, adaptive content, reusable components, personality variation, and usefulness to visitors before committing to a framework.

---

## D004 — Documentation is part of the product

**Status:** Accepted  
**Date:** 2026-09-14

### Context
The project was initially framed primarily as an adaptive portfolio website.

During planning, it became clear that the principles, architecture, experiments, and decisions are themselves a major outcome of the project.

### Options considered
1. Treat documentation as supporting material for the website.
2. Treat documentation as an equal part of the project alongside implementation.
3. Focus primarily on code and reconstruct decisions later if needed.

### Decision
Treat the project as a **documented adaptive portfolio system**.

The website is an implementation and proof of that system, not the sole product.

### Why
This keeps the project understandable when technologies change, makes decisions explicit, preserves learning from experiments, and creates a stronger case study of the thinking behind the work.

### Consequences
- Documentation quality becomes a project objective.
- Important concepts should be explainable without reading code.
- Implementation technologies remain replaceable.
- Important changes should be reflected in documentation before or alongside implementation.
- New Markdown files should only be created when a new body of knowledge genuinely needs its own home.

### Revisit when
Revisit if the documentation process begins to create more overhead than useful understanding.

---

# Next decisions likely to be needed

- What is the exact stable professional core?
- Who are the primary portfolio audiences?
- Which content properties may adapt?
- How many visual personality levels are genuinely useful?
- What is the smallest proof of concept that can validate the adaptive idea?
- How should job-specific configurations be represented?
- At what point does the system need a dedicated `system-model.md` document?

---

# Change history

## v0.2
- Added D004: Documentation is part of the product.
- Clarified that documentation should evolve alongside important implementation decisions.

## v0.1
- Created the initial decision log.
- Added D001, D002, and D003.
