# Sinatra Associations
### LGs:
* - [ ] Define relationship between two models
* - [ ] Describe how the params hash is built
* - [ ] Describe how to nest hashes inside of the params hash

**TASK:** Create AuthorsController and associated view
| Controller    | views         |
| ------------- | ------------- |
| `get '/authors'`| `authors/index` |
| `get '/authors/:id'`| `authors/show` |
| `get '/authors/new'`| `authors/new` |
| ` post '/authors'`| `redirect '/authors/:id'`|
| `get '/authors/:id/edit'`| `authors/edit` |
| `patch '/authors/:id'`| `redirect '/authors/:id'` |
| `delete '/authors/:id'`| `redirect '/authors'` |


#### **Define relationship between two models**
* has_many :books
* belongs_to :author

#### **Describe how the params hash is built**
* How can we store author_id for a book when we create a new book?
* How can we change author_id for a book when we change an existing book?
    
#### **Describe how to nest hashes inside of the params hash**
* What if author is not there and I want to create a new author and associated with a new book or an exsiting book?

        