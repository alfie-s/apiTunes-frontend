// bootstrap elements
import { Button, Form, FormControl, FormGroup, FormSelect } from 'react-bootstrap'
// returns search component
const Search = ({
   // search container params
      handleSubmit,
      searchTerm,
      handleSearchTermChange,
      handleMediaChange
   }) => {
   // object array with diiferent values for drop down search elements
   const media = [
      {type: 'All media', value: 'all'},
      {type: 'Movie', value: 'movie'},
      {type: 'Podcast', value: 'podcast'},
      {type: 'Music', value: 'music'},
      {type: 'Music video', value: 'musicVideo'},
      {type: 'Audio book', value: 'audiobook'},
      {type: 'Short film', value: 'shortFilm'},
      {type: 'TV show', value: 'tvShow'},
      {type: 'Software', value: 'software'},
      {type: 'Ebook', value: 'ebook'}
   ];
   return (
      <div className='searchCont'>
         {/* submit button */}
         <Form onSubmit={handleSubmit}>
            <FormGroup className='form-group search-box'>
               {/* bootstrap search box */}
               <FormControl
                  type='text'
                  className='search-bar'
                  placeholder='Search'
                  name='term'
                  value={searchTerm}
                  onChange={handleSearchTermChange}
               />
            </FormGroup>
            <FormGroup className='form-group filter'>
               {/* Dropdown list */}
               <FormSelect onChange={handleMediaChange}>
                  {/* Map through array */}
                  {media.map((media) => (
                     <option key={media.value} value={media.value}>
                        {media.type}
                     </option>
                  ))}
               </FormSelect>
            </FormGroup>
            <FormGroup className='submitBtn'>
               {/* Submit button that will run the search */}
               <Button variant='secondary' type='submit'>
                  Search
               </Button>
            </FormGroup>
         </Form>
      </div>
   )
}
export default Search;
