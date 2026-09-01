# Agent Skills

My personal agent skill library

## Install with Pi

Clone the repository:

```bash
git clone https://github.com/cx18121/agent-skills.git
```

Add the absolute `skills` directory to Pi's `skills` setting:

```json
{
  "skills": ["/absolute/path/to/agent-skills/skills"]
}
```

Restart Pi. You can also copy or symlink individual skill directories into `~/.agents/skills`.

## Other agents

The directories follow the Agent Skills format. Copy or link the skills you want into the location used by your agent.

## External services

No credentials are stored in this repository. Skills that use external services read credentials from environment variables such as `FIRECRAWL_API_KEY` and `OPENAI_API_KEY`.

The bundled Impeccable skill is based on version 4.1.1. It performs a cached update check against `https://impeccable.style` and may fetch design cards from that service when its relevant workflow runs. Updating it from upstream can overwrite the local Pi compatibility changes listed in [THIRD_PARTY.md](THIRD_PARTY.md).

## Licenses

Original work in this repository is available under the MIT License. Several skills include work from other projects under their own licenses. See [THIRD_PARTY.md](THIRD_PARTY.md) and the license files inside those skill directories.
