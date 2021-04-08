# api-docs

Welcome to the home of Bandwidth's next generation of API docs! This repo serves as a mono repo that contains multiple OpenAPI specs that powers Bandwidth's external and internal API references and SDKs, and will eventually replace https://github.com/bandwidth/bandwidth.github.io and https://github.com/bandwidth/internal-api-docs.

## Contribution Guidelines Overview

1) If you're updating a currently existing markdown file or OpenAPI spec, you most likely will not need to update any other files.
2) If you're adding a new OpenAPI spec, make sure the directory name matches the spec title, and make sure to update the APIMatic config file.
3) If you're adding a new markdown file and/or markdown directory, make sure to update the root `toc.yml` file (if needed), and make sure to include `toc.yml` files in the new directories (if needed).
4) If your changes should come with a changelog update, make sure to update the changelog file. Otherwise, include the `no-changelog` tag on your PR.

## Components

### External Docsite

The `./external` directory contains all of the configuration and information for the external docsite and SDKs.

#### Configuration

The `./external/configuration` directory contains APIMatic configuration files. Typically the files in this directory will be updated by the DevX team only.

`configuration/bw-portal.APIMATIC-BUILD.json` is probably the only file that could be updated by an API team, and that would be adding a new API to the `apiSpecs` list.

#### Specs

The `./external/specs` directory contains our OpenAPI specs. The specs are all defined as `<SpecTitle>/openapi.json`. Please use this format for adding new specs.

#### Markdown

The `./external/markdown` directory contains the markdown files and table of contents (toc.yml) files for the docsite.

##### toc.yml

The `toc.yml` file allows you to define navigation dropdown items, and rendered markdown files.

`toc.yml` example

```
toc:
- group: MyNewAPI
  dir: myNewApi
- page: Release Notes
  file: "release-notes.md"
```

`toc.yml` files can also be nested, and should be included on any sub-directory. Continuing the above example, we will include a `myNewApi/toc.yml` file to make the pages render.

```
toc:
- page: My New API Tutorial
  file: "myNewApiTutorial.md"
```

Any `group` value that also exists within the `apiSpecs` list within `configuration/bw-portal.APIMATIC-BUILD.json` will have an API reference generated from its OpenAPI spec.

##### Markdown Directory Rules

It is highly recommended to use the following rules for the markdown directory.

1) The root level `./toc.yml` file will have the following structure

```
toc:
- group: Overview
  dir: overview
- page: Release Notes
  file: "release-notes.md"
- group: Guides
  dir: guides
- group: API #repeat this pair for every API
  dir: api
```

2) `./overview/home-page.md` is the docsite homepage and has a manually maintained table linking to every API overview page.
3) `./guides` contains markdown files for Bandwidth information not tied to a single API.
4) Every API directory starts with an overview page and a `guides/` directory. Just like the root home page, the API overview page will have a manually maintained table linking to the guides.
5) If a concept is too complicated to sit as a single page guide, it needs to be an additional sub-directory within the API directory.
6) API facts such as request/response bodies, BXML syntax, and callback bodies, should not be mixed with guides. Guides are encouraged to reference facts when needed. 1 example is allowed on a fact page; any more than that should turn into a guide.

Good examples of rules 4 and 5 can be found in the `./external/markdown/voice` and `./external/markdown/voice/bxml` directories respectively.

### Internal Docsite

The `./internal` directory contains all of the configuration and information for the internal docsite.

This directory contains the exact same structre as the `./external` directory, but has slightly different configuration.

### Postman

The `./postman` directory contains code and templates to generate our public facing Postman collection. The majority of the collection is generated from our OpenAPI specs, but `resources/postman_scaffold_collection.json` contains templates for Postman tutorials if someone wants to create one.

### Docsite Generation

The `./docsite-generation` directory contains simple shell scripts that generate the docsites, and let you run the docsite servers locally. Typically you'll interface with these through NPM commands.

### SDK Generation

The `./sdk-generation` directory contains code and config for our SDK generation that supports our public SDKs. Much like the docsite generation, typically you'll interface with this through NPM commands.

`npm run generate -- -l <LANGUAGE> -s <SPEC>` is the command to generate an SDK. The `-s` flag is optional; not including it will default to the SDK with all APIs. The file `./sdk-generation/bandwidth.zip` will contain the generated code.

| Language | Notes |
|--|--|
| python | |
| ruby | |
| csharp | |
| java | |
| php | PHP >= 7.2
| phpold | Does not have XML support |
| node | Highly recommended to generate with a specified spec |

## PR Requirements

### Staging Docsite

Any changes to the `./external/specs` or `./external/content` directories triggers a PR docsite on build. This docsite should be validated.

### Changelog 

Any changes to the `./external/specs` or `./external/content` directories requires an update to `./external/content/changelog.md`. If updating this isn't relevant, you must add the `no-changelog` label to your PR.

## Resources

The `./resources` directory contains various extra resources for API design and DX needs for Bandwidth.
