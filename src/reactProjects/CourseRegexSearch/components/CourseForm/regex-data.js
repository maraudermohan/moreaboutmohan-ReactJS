/**
 * Semester : one of [Fall, Winter, Spring, Summer]
 * Accounted for both complete text or abbreviation
 * Accepting lowercase and Pascal case only. Ignoring other cases
 */
export const SEMESTER_REGEX = '((f|F)(all)?|(w|W)(inter)?|(Su|su)(mmer)?|(s|S)(pring)?)';

/**
 * Year : ranging from 2000 till 2029
 * Rejects any year out of the range
 */
export const YEAR_REGEX = '((20)?[012]\\d)';

/**
 * Department name + Course Number, separated by space or : or -
 * Concating with Semester and Year regex
 * Accounting for Semester and Year in either order
 */
export const COURSE_REGEX_FULL = /^([a-zA-Z]+)[\s:-]?(\d+)\s((((f|F)(all)?|(w|W)(inter)?|(s|S)(pring)?|(Su|su)(mmer)?)\s?((20)?[012]\d))|(((20)?[012]\d)\s?((f|F)(all)?|(w|W)(inter)?|(s|S)(pring)?|(Su|su)(mmer)?)))$/;
