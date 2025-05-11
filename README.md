# Moonbit Github Workflows

This CI configuration was modified from [moonbitlang/core CI](https://github.com/moonbitlang/core/blob/main/.github/workflows/check.yml)

## Usage

Change the `master` branch to your own

```yaml
## .github\workflows\check.yaml
name: check

on:
  push:
    branches:
      - master
  pull_request:
```

## Modified

### remove 

* moon bundle
* coverage-check
* license-header-check



