# deno-luca-sandbox

Petit dépôt Deno 2 servant de bac à sable pour des exécutions déclenchées
manuellement via GitHub Actions (`workflow_dispatch`).

## Contenu

- `src/main.ts` : fonctions pures `add` et `slugify`, plus un handler HTTP
  (`/health`, `/slug`).
- `tests/unit` : tests unitaires.
- `tests/integration` : test d'intégration sur serveur local.
- `tests/e2e` : scénario de bout en bout.
- `bench` : benchmarks.

## Tâches Deno

deno task build deno task typecheck deno task lint deno task unit deno task
integration deno task e2e deno task perf

## Workflows

- `.github/workflows/luca-run.yml` : exécution déclenchée manuellement (`kind`
  parmi `build`, `typecheck`, `lint`, `targeted_tests`, `unit_tests`,
  `integration_tests`, `e2e_tests`, `performance`, `sandbox`). Le rapport est
  publié en artefact.
- `.github/workflows/ci.yml` : format, lint, typecheck et tests unitaires sur
  `push`/`pull_request`, avec publication d'un résumé.

Aucune entrée utilisateur n'est interpolée directement dans les scripts shell :
tout passe par des variables d'environnement.

Démonstration de merge gouverné (lot 15).
