import { useSelector } from "react-redux"
import { selectAllUsers } from "../../reducer/userSlice"
import { NavLink } from "react-router-dom"

const AuthorDirectory = () => {
    const authors=useSelector(selectAllUsers)
    const renderedAuthors=authors.map(author=>(
       
        <NavLink className="w-full" to={`/AuthorsDirectory/${author.id}`}> <li className="authors-list">{author.fullName}</li></NavLink>
    ))
  return (
    <section className="mt-8 flex flex-col justify-center items-center gap-8 container px-5">
        <h2 className="text-5xl font-Viga">Authors List</h2>
        <ul className="w-full flex flex-col gap-4 bg-PURPLE py-8 rounded-lg odd:bg-RED">
           {renderedAuthors}
        </ul>
    </section>
  )
}

export default AuthorDirectory