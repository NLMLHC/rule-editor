# Change log

This project follows [Semantic Versioning](http://semver.org/).

## [3.1.1] 2022-03-31
### Changed
- Replaced Protractor tests with Cypress.

## [3.1.0] 2021-03-28
### Added
- Added the ability to select the output expression type within the Rule Editor.
  There is now an option to enable this functionality.

## [3.0.1] 2021-02-04
### Added
- Added a help link to the demo app.
- Stopped minifying files for the demo app.
- Updated easy-path-expressions.

## [3.0.0] 2022-01-28
### Added
- Updated URI used for score calculation extensions from:
  `http://lhcforms.nlm.nih.gov/fhir/ext/rule-editor-expression` to
  `http://lhcforms.nlm.nih.gov/fhir/ext/rule-editor-score-expression`
- Score calculation logic for nested items:
  - Assume scored items are above (in question order) the total score item.
  - If a preceding item is also a total score item, don’t consider any earlier
    items.

## [2.0.1] 2022-01-28
### Changed
- Hide instant preview in case statements when condition, output and default is
  not entered.

## [2.0.0] 2022-01-11
### Changed
- Variables editable in the interface are now from the question specified by
  linkId. The other variables in the questionnaire show up in the uneditable
  section.
- Updated form upload in the demo to be easier to use.

## [1.6.1] 2022-01-10
### Changed
- Updates to get `easy-path-expressions` working inside applications using the
  Angular library.

## [1.6.0] 2021-10-08
### Added
- Add the ability to upload questionnaires in the demo app.

## [1.5.0] 2021-09-09
### Added
- Case statement support for the final expression.

## [1.4.0] 2021-08-27
### Added
- Tooltip preview for automatically generated FHIRPath and x-fhir-query.
- Copy button next to FHIRPath and x-fhir-query preview.

## [1.3.0] 2021-08-23
### Added
- Add support for `x-fhir-query`.

## [1.2.0] 2021-08-11
### Added
- New APIs to check if there is a score `isScoreCalculation` and update a score
`updateScoreCalculation` on a questionnaire.

## [1.1.0] 2021-07-30
### Added
- New API to calculate score without using a UI `addTotalScoreRule`.

## [1.0.1] 2021-07-27
### Changes
- Keep the existing extension order when saving.

## [1.0.0] 2021-07-22
### Changes
- Add support for removing score calculation from a questionnaire.
- Change the API from `checkIfScore` to `getScoreQuestionCount`.

## [0.2.0] 2021-06-28
### Changes
- Add support for developer specified runtime widget styles.
- Add support for editing user specified expressions not just
  calculatedExpressions by using the `expressionUri` attribute.

## [0.1.0] 2021-06-28
### Changes
- Add support to use widget as an Angular Library.
- Add support to use widget as a Web Component.
