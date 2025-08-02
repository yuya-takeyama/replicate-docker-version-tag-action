<p align="center">
  <a href="https://github.com/yuya-takeyama/replicate-docker-version-tag-action/actions"><img alt="typescript-action status" src="https://github.com/yuya-takeyama/replicate-docker-version-tag-action/workflows/build-test/badge.svg"></a>
</p>

> [!CAUTION]
> ## 🚨 This project is deprecated
> 
> **For security reasons, always use immutable commit hashes instead of mutable tags in GitHub Actions.**
> 
> ```yaml
> # ❌ Unsafe: mutable tag
> - uses: some-action@v2
> 
> # ✅ Safe: immutable commit hash
> - uses: some-action@c3a4b5d6e7f8910abcdef1234567890123456789
> ```
> 
> Learn more: [Supply Chain Attack via Mutable Tags - CVE-2025-30066](https://www.wiz.io/blog/github-action-tj-actions-changed-files-supply-chain-attack-cve-2025-30066)

---

# Replicate Docker version tag

This action replicates Docker version tag from like `1.2.3` to `1.2` and `1`.

## Usage

This action only generates Docker tags.

To build and push Docker images, you need to use another action like [docker/build-push-action](https://github.com/docker/build-push-action).

```yaml
steps:
  - uses: actions/checkout@v2
  - id: docker-tag
    uses: yuya-takeyama/docker-tag-from-github-ref-action@v1
  - id: docker-tags
    uses: yuya-takeyama/replicate-docker-version-tag-action@v1
    with:
      image: user/app
      tag: ${{ steps.docker-tag.outputs.tag }}
  - name: Build and push
    uses: docker/build-push-action@v2
    with:
      push: true
      tags: ${{ steps.docker-tags.outputs.tags }}
```

With this example and given a tag `1.2.3`, the generated tags are like below:

```
user/app:1.2.3,user/app:1.2,user/app:1
```

Tags are separated by `,` (a comma).

[docker/build-push-action](https://github.com/docker/build-push-action) accepts the format.

## Inputs

| Name        | Required | Default | Description                                                 |
|-------------|----------|---------|-------------------------------------------------------------|
| `tag`       | `true`   |         | Docker image tag indicates a semver (like `1.2.3`)          |
| `image`     | `false`  |         | Docker image name (like `foo/bar` or `example.com/foo/bar`) |
| `separator` | `false`  | ,       | Separator to of multiple images                             |

## Outputs

| Name   | Description     |
|--------|-----------------|
| `tags` | Replicated tags |
