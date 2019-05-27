import SingleCourse from "../components/SingleCourse";

const SingleCoursePage = props => (
  <>
    <SingleCourse id={props.query.id} />
  </>
);

export default SingleCoursePage;
