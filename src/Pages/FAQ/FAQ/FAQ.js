import React from "react";

const FAQ = () => {
  return (
    <div className="mx-auto border border-info rounded p-3">
      <h3 className="text-info">
        Computer Science 1 Important Programming "Rules of Thumb"
      </h3>
      <hr />
      <div>
        <h4>1. K.I.S.S. (Keep It Simple, Stupid)</h4>
        <p>
          There are many areas where this rule applies in programming. Two very
          important ones are:
        </p>
        <ul>
          <li>
            Subprogram behavior and length: Subprograms should do precisely ONE
            conceptual task and no more. The length of a subprogram should allow
            it to be easily visually inspected; generally no more that one page
            in length. Similarly you should generally not mix input/output and
            algorithmic logic in the same subprogram; it is alway a goal to
            separate I/O from logic.
          </li>
          <li>
            If a problem is can be decomposed into two or more independently
            solvable problems, then solve them independently and after you have
            implemented and tested the independent solutions, then combine them
            into the larger result. This is sometimes known as "Gall's Law": "A
            complex system that works is invariably found to have evolved from a
            simple system that worked. The inverse proposition also appears to
            be true: A complex system designed from scratch never works and
            cannot be made to work. You have to start over, beginning with a
            working simple system."
          </li>
        </ul>
      </div>
      <div>
        <h4>2. "Rule of Three" (code duplication)</h4>
        <p>
          is a code refactoring rule of thumb to decide when a replicated piece
          of code should be replaced by a new procedure. It states that you are
          allowed to copy and paste the code once, but that when the same code
          is replicated three times, it should be extracted into a new
          procedure. The rule was introduced by Martin Fowler in his text
          "Refactoring" and attributed to Don Roberts.
        </p>
        <p>
          Duplication in programming is almost always in indication of poorly
          designed code or poor coding habits. Duplication is a bad practice
          because it makes code harder to maintain. When the rule encoded in a
          replicated piece of code changes, whoever maintains the code will have
          to change it in all places correctly. This process is error-prone and
          often leads to problems. If the code exists in only one place, then it
          can be easily changed there. This rule is can even be applied to small
          number of lines of code, or even single lines of code. For example, if
          you want to call a function, and then call it again when it fails,
          it's OK to have two call sites; however, if you want to try it five
          times before giving up, there should only be one call site inside a
          loop rather than 5 independent calls.
        </p>
      </div>
      <div>
        <h4>3. Ninety-ninety rule ( failure to anticipate the hard parts)</h4>
        <p>The ninety-ninety rule is a humorous aphorism that states:</p>
        <ul>
          <li>
            "The first 90 percent of the code accounts for the first 90 percent
            of the development time. The remaining 10 percent of the code
            accounts for the other 90 percent of the development time." —Tom
            Cargill, Bell Labs
          </li>
        </ul>
        <p>
          That the total development time sums to 180% is a wry allusion to the
          notorious tendency of software development projects to significantly
          overrun their original schedules. It expresses both the rough
          allocation of time to easy and hard portions of a programming project
          and the cause of the lateness of many projects (that is, failure to
          anticipate the hard parts). In other words, it takes both more time
          and more coding than expected to make a project work.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
