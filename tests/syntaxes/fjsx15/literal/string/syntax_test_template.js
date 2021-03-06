// SYNTAX TEST "Packages/Naomi/syntaxes/naomi.fjsx15.sublime-syntax"

// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

   `Something is 'here'...`
// ^^^^^^^^^^^^^^^^^^^^^^^^ .string.template.js.fjsx15
// ^ .punctuation.definition.string.begin.js.fjsx15
//                        ^ .punctuation.definition.string.end.js.fjsx15
   `Something is "here"...`
// ^^^^^^^^^^^^^^^^^^^^^^^^ .string.template.js.fjsx15
// ^ .punctuation.definition.string.begin.js.fjsx15
//                        ^ .punctuation.definition.string.end.js.fjsx15
   `Something is \`here\`...`
// ^^^^^^^^^^^^^^^^^^^^^^^^^^ .string.template.js.fjsx15
// ^ .punctuation.definition.string.begin.js.fjsx15
//               ^^ .constant.character.escape.a.js.fjsx15
//                     ^^ .constant.character.escape.b.js.fjsx15
//                          ^ .punctuation.definition.string.end.js.fjsx15
   `Escaped: \\\b\f\n\r\t\v\x12\u1234\u{1234}`
// ^^^^^^^^^^^^^^^^^^^^^^^^^ .string.template.js.fjsx15
// ^ .punctuation.definition.string.begin.js.fjsx15
//           ^^ .constant.character.escape.a.js.fjsx15
//             ^^ .constant.character.escape.b.js.fjsx15
//               ^^ .constant.character.escape.a.js.fjsx15
//                 ^^ .constant.character.escape.b.js.fjsx15
//                   ^^ .constant.character.escape.a.js.fjsx15
//                     ^^ .constant.character.escape.b.js.fjsx15
//                       ^^ .constant.character.escape.a.js.fjsx15
//                         ^^^^ .constant.character.escape.b.js.fjsx15
//                             ^^^^^^ .constant.character.escape.a.js.fjsx15
//                                   ^^^^^^^^ .constant.character.escape.b.js.fjsx15
//                                           ^ .punctuation.definition.string.end.js.fjsx15
   `Embedded variable ${variable}`
// ^^^^^^^^^^^^^^^^^^^ .string.template.js.fjsx15
// ^ .punctuation.definition.string.begin.js.fjsx15
//                    ^^ - string.template.js.fjsx15
//                    ^^ .keyword.operator.other.embedded-expression.begin.js.fjsx15
//                      ^^^^^^^^ .entity.name.variable.js.fjsx15
//                              ^ - string.template.js.fjsx15
//                              ^ .keyword.operator.other.embedded-expression.end.js.fjsx15
//                               ^ .string.template.js.fjsx15
//                               ^ .punctuation.definition.string.end.js.fjsx15
   `A${`B${`C`}`}`
// ^^ .string.template.js.fjsx15
// ^ .punctuation.definition.string.begin.js.fjsx15
//   ^^ - string.template.js.fjsx15
//   ^^ .keyword.operator.other.embedded-expression.begin.js.fjsx15
//     ^^ .string.template.js.fjsx15
//     ^ .punctuation.definition.string.begin.js.fjsx15
//       ^^ - string.template.js.fjsx15
//       ^^ .keyword.operator.other.embedded-expression.begin.js.fjsx15
//         ^^^ .string.template.js.fjsx15
//         ^ .punctuation.definition.string.begin.js.fjsx15
//           ^ .punctuation.definition.string.end.js.fjsx15
//            ^ - string.template.js.fjsx15
//            ^ .keyword.operator.other.embedded-expression.end.js.fjsx15
//             ^ .string.template.js.fjsx15
//             ^ .punctuation.definition.string.end.js.fjsx15
//              ^ - string.template.js.fjsx15
//              ^ .keyword.operator.other.embedded-expression.end.js.fjsx15
//               ^ .string.template.js.fjsx15
//               ^ .punctuation.definition.string.end.js.fjsx15
