function submitForm() {
  const radios = document.querySelectorAll('input[type="radio"]');
  let totalScore = 0;
  let group1Score = 0; // For questions 7, 12
  let group2Score = 0; // For questions 10, 14
  let group3Score = 0; // For questions 3, 9
  let group4Score = 0; // For questions 4, 13
  let group5Score = 0; // For questions 6, 15
  let group6Score = 0; // For questions 1, 16
  let group7Score = 0; // For questions 5, 8
  let group8Score = 0; // For questions 2, 11

  const group1Questions = [7, 12];
  const group2Questions = [10, 14];
  const group3Questions = [3, 9];
  const group4Questions = [4, 13];
  const group5Questions = [6, 15];
  const group6Questions = [1, 16];
  const group7Questions = [5, 8];
  const group8Questions = [2, 11];

  const numQuestions = radios.length / 5;

  for (let i = 0; i < numQuestions; i++) {
    let questionScore = 0;
    const radioName = `question${i + 1}`;
    const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
    if (selectedRadio) {
      questionScore = parseInt(selectedRadio.value);
      totalScore += questionScore;
      if (group1Questions.includes(i + 1)) {
        group1Score += questionScore;
      } else if (group2Questions.includes(i + 1)) {
        group2Score += questionScore;
      } else if (group3Questions.includes(i + 1)) {
        group3Score += questionScore;
      } else if (group4Questions.includes(i + 1)) {
        group4Score += questionScore;
      } else if (group5Questions.includes(i + 1)) {
        group5Score += questionScore;
      } else if (group6Questions.includes(i + 1)) {
        group6Score += questionScore;
      } else if (group7Questions.includes(i + 1)) {
        group7Score += questionScore;
      } else if (group8Questions.includes(i + 1)) {
        group8Score += questionScore;
      }
    }
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

  let comment = "";
  if (totalScore <= 36) {
    comment = "You probably tend to view problems as negatives, instead of seeing them as opportunities to make exciting and necessary change. Your approach to problem solving is more intuitive than systematic, and this may have led to some poor experiences in the past. With more practice, and by following a more structured approach, you'll be able to develop this important skill and start solving problems more effectively right away.";
  } else if (totalScore <= 58) {
    comment = "Your approach to problem solving is a little \"hit-and-miss.\" Sometimes your solutions work really well, and other times they don't. You understand what you should do, and you recognize that having a structured problem-solving process is important. However, you don't always follow that process. By working on your consistency and committing to the process, you'll see significant improvements.";
  } else if (totalScore <= 80) {
    comment = "You are a confident problem solver. You take time to understand the problem, understand the criteria for a good decision, and generate some good options. Because you approach problems systematically, you cover the essentials each time – and your decisions are well though out, well planned, and well executed. You can continue to perfect your problem-solving skills and use them for continuous improvement initiatives within your organization. Skim through the sections where you lost points below, and sharpen your skills still further!";
  } else {
    comment = "Thank you! We are thrilled that you loved our product.";
  }

  resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

  resultsDiv.innerHTML += "Attacked the problem not the person<br><br>";

  resultsDiv.innerHTML += `Find the Problem: ${group1Score} <br>`;
  resultsDiv.innerHTML += `Find the Facts: ${group2Score} <br>`;
  resultsDiv.innerHTML += `Define the Problem: ${group3Score} <br>`;
  resultsDiv.innerHTML += `Find Ideas: ${group4Score} <br>`;
  resultsDiv.innerHTML += `Select and Evaluate: ${group5Score} <br>`;
  resultsDiv.innerHTML += `Plan: ${group6Score} <br>`;
  resultsDiv.innerHTML += `Sell the Idea: ${group7Score} <br>`;
  resultsDiv.innerHTML += `Act: ${group8Score} <br>`;
  resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score + group6Score + group7Score + group8Score} <br><br>`;

  const scores = [group1Score, group2Score, group3Score, group4Score, group5Score, group6Score, group7Score, group8Score];
  const minScore = Math.min(...scores);
  const sortedScores = [...scores].sort((a, b) => a - b);
  const colors = scores.map(score => {
    if (score === minScore) return "red";
    if (score === sortedScores[1]) return "blue";
    return "grey";
  });

  let barChartHTML = "<div style='display: flex;'>";
  for (let i = 0; i < scores.length; i++) {
    barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
  }
  barChartHTML += "</div>";

  resultsDiv.innerHTML += barChartHTML;

  resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}