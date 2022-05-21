import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./MasterStyles.css";
import Navbar from "./Navbar";

const ProjectPage = (props) => {
  return (
    <>
      <div className="specialcase ">
        <div>
          <Navbar />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="col-4">
              <div class="progress" style={length}>
                <div class="progress-bar" style={width}>
                  (props.ProjectStatus)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row mx-auto">
            <div className="col-12">
              <p style={bold}>Project Progress</p>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="col-12">
              <h1 style={bold}>props.</h1>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row ">
          <div className="col-12 ms-4">
            <h4 style={bold}>Project Team</h4>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 ms-4">
            <p>Sajid (UI developer)</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <p>Majid (React developer)</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <p>Faiq (Spring Boot developer)</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <p>Abdullah (Designer)</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <h4 style={bold}>Project Description</h4>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <p>
              A well-organized paragraph supports or develops a single
              controlling idea, which is expressed in a sentence called the
              topic sentence. A topic sentence has several important functions:
              it substantiates or supports an essay’s thesis statement; it
              unifies the content of a paragraph and directs the order of the
              sentences; and it advises the reader of the subject to be
              discussed and how the paragraph will discuss it. Readers generally
              look to the first few sentences in a paragraph to determine the
              subject and perspective of the paragraph. That’s why it’s often
              best to put the topic sentence at the very beginning of the
              paragraph. In some cases, however, it’s more effective to place
              another sentence before the topic sentence—for example, a sentence
              linking the current paragraph to the previous one, or one
              providing background information. Although most paragraphs should
              have a topic sentence, there are a few situations when a paragraph
              might not need a topic sentence. For example, you might be able to
              omit a topic sentence in a paragraph that narrates a series of
              events, if a paragraph continues developing an idea that you
              introduced (with a topic sentence) in the previous paragraph, or
              if all the sentences and details in a paragraph clearly
              refer—perhaps indirectly—to a main point. The vast majority of
              your paragraphs, however, should have a topic sentence.In a
              coherent paragraph, each sentence relates clearly to the topic
              sentence or controlling idea, but there is more to coherence than
              this. If a paragraph is coherent, each sentence flows smoothly
              into the next without obvious shifts or jumps. A coherent
              paragraph also highlights the ties between old information and new
              information to make the structure of ideas or arguments clear to
              the reader. Along with the smooth flow of sentences, a paragraph’s
              coherence may also be related to its length. If you have written a
              very long paragraph, one that fills a double-spaced typed page,
              for example, you should check it carefully to see if it should
              start a new paragraph where the original paragraph wanders from
              its controlling idea. On the other hand, if a paragraph is very
              short (only one or two sentences, perhaps), you may need to
              develop its controlling idea more thoroughly, or combine it with
              another paragraph.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <h4 style={bold}>Project Tasks</h4>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-5">
            <h5>Task1:</h5>
            <p> Task assigned to Sajid about the UI of the Page (Submitted)</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-5">
            <h5>Task2:</h5>
            <p> Task assigned to Majid about the UX of the Page (Submitted)</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-5">
            <h5>Task3:</h5>
            <p>
              {""}
              Task assigned to Faiq about the backend of the Page (Not
              Submitted)
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-5">
            <h5>Task4:</h5>
            <p>
              {" "}
              Task assigned to Abdullah about the UI of the Page ( Not
              Submitted)
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ms-4">
            <h4 style={bold}>Project Deadline</h4>
            <p>12 May 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectPage;
const length = {
  width: 500,
  height: 30,
};
const width = {
  width: (70 / 100) * 500,
};
const bold = {
  fontWeight: "bold",
};
