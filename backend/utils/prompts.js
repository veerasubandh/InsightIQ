const questionAnswerPrompt = (role,experience,topicsToFocus,numberOfQuestions)=>(`
    You are an AI trained to generate technical interview questions and answers.
    
    Task:
    - Role:${role}
    - Candidate Experience:${experience}
    - Topics to focus on: ${topicsToFocus}
    - Write ${numberOfQuestions} interview Questions.
    - For each question, generate a detailed but beginner - friendly answer.
    - If the answer needs a code example,  add a small code block inside.
    - Keep formatting very clean.
    - Return a pure JSON array like:
        [
            {
                "question": "Question here?",
                "answer": "Answer here"
            },
            ...
        ]
        Important: Do NOT add any extra text. Only return valid JSON.
`)

const conceptExplainPrompt = (question)=>(`
    You are an AI trained to generate explainations for a given interview question.

    Task: 
    - Explain the following interview question and its concept in depth as if you are teaching a beginner developer.
    - Question :"${question}"
    - After the explaination, provide a short and clear title that summarizes the concept for the article or page header.
    - If the explaination includes a code example, provide a small code block.
    - Keep the formatting very clean and clear.
    - Return the result as a valid JSON object in the following format:
    {
        "title": "Short title here",
        "explaination": "Detailed explaination here",
    }
    Important: Do NOT add any extra text. Only return valid JSON.
`)

module.exports = {questionAnswerPrompt, conceptExplainPrompt}