const { introduction, introductionWithLanguage, introductionWithLanguageOptional } = require('../index.js');

   describe('introduction(name)', () => {
     it('takes in an argument of a name and returns a phrase with that name using string interpolation', () => {
       expect(introduction('Josh')).toEqual('Hi, my name is Josh.');
     });
   });

   describe('introductionWithLanguage(name, language)', () => {
     it('takes in two arguments, a name and a language, and returns a phrase using those arguments', () => {
       expect(introductionWithLanguage('Josh', 'Ember.js')).toEqual('Hi, my name is Josh and I am learning to program in Ember.js.');
     });
   });

   describe('introductionWithLanguageOptional(name, language)', () => {
     it('takes in two arguments, a name and a language, and language defaults to JavaScript', () => {
       expect(introductionWithLanguageOptional('Josh')).toEqual('Hi, my name is Josh and I am learning to program in JavaScript.');
     });

     it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', () => {
       expect(introductionWithLanguageOptional('Josh', 'Python')).toEqual('Hi, my name is Josh and I am learning to program in Python.');
     });
   });
