import "../css/FeedbackSaas.scss"


function Feedback() {
  return (
    <div className="Feedback">
      <form>
        <div>
          <p>First name</p>
          <p>Email</p>
        </div>
        <div>
          <input placeholder="Write name" type="text" />
          <input placeholder="Write email" type="email" />
        </div>
        <textarea placeholder="Write a text" ></textarea>
        <button>Send for feedback</button>
      </form>
    </div>
  )
}

export {Feedback}