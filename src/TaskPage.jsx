import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {useLocation } from "react-router-dom";
import "./MasterStyles.css";
import Navbar from "./Navbar";
export default function TaskPage() {
  const state  = useLocation();
  var PersonId= state.taskAssigned_to
  var taskid= state.taskid
  var ManagerId= state.managerid
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [Feedback, setFeedback] = useState("Feedback");
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    selectedFile(true);
  };
  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    fetch("https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const Req_count=1
  const handleMeeting = (event) => {
    const taskId = randomNumberInRange(1, 10000);
    const meetingreq={
      taskId,
      ManagerId,
      PersonId,
      Req_count
    }
    var data1;
    fetch("http://localhost:8080/Meetingrequest/savemeeting", {
      method: "post",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(meetingreq),
    })
   
      .then((response) => response.json())
      .then((data) => {
        data1 = data;
        //alert(data1)
        if (data1 === "Meeting Requested") {
          alert("Meeting Requested");
        } else {
          alert("Meeting Already Requested");
        }
      })
      .catch((error) => {
        alert("Something went wrong, please try again later.");
      });
  };

  const handleFeedback = (event) => {
    const message={
      ManagerId,
      PersonId,
      Feedback,
      taskid
    }
    var data1;
    fetch("http://localhost:8080/Message/savemessage", {
      method: "post",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(message),
    })
   
      .then((response) => response.json())
      .then((data) => {
        data1 = data;
        //alert(data1)
        if (data1 === "Message sent") {
          alert("Message send");
        } else {
          alert("Message sending failed");
        }
      })
      .catch((error) => {
        alert("Something went wrong, please try again later.");
      });
  };

  return (
    <>
      <div className="overall2 ">
        <div>
          <Navbar />
        </div>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="col-12">
              <h1 style={bold}>Task UI of Project Health Care</h1>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row ">
          <div className="col-12 ms-4">
            <h4 style={bold}>Task Description</h4>
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
        <br></br>
        <br></br>
        <br></br>

        <div className="d-flex justify-content-center">
          <div className="row ms-3">
            <div className="col-12">
              <input type="file" name="file" onChange={changeHandler} />
              {selectedFile ? (
                <div>
                  <br />
                  <p>Filename: {selectedFile.name}</p>
                  <p>Filetype: {selectedFile.type}</p>
                  <p>Size in bytes: {selectedFile.size}</p>
                  <p>
                    lastModifiedDate:{" "}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p className="mt-3">Select a file to show details</p>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-12">
              <div>
                <button
                  className="btn btn-primary me-5"
                  onClick={handleSubmission}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <button class="btn btn-primary me-5" onClick={handleMeeting}>
            Ask for Meeting
          </button>
        </div>
        <br />
        <div class="row justify-centre">
          <label class="col-sm-3 col-form-label"></label>
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control"
              required
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary me-5" onClick={handleFeedback}>
              Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const bold = {
  fontWeight: "bold",
};
