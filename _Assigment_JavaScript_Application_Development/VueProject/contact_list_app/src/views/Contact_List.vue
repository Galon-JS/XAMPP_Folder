<template>
  <div class="about">
    <h1>This is an Contact List page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Enter 
name"
              />
              <small id="nameHelp" class="form-text text-muted"
                >We'll never share your name with anyone else.</small
              >
            </div><br>
            <div class="form-group">
              <label for="exampleInputPhone">Phone</label>
              <input
                type="tel"
                class="form-control"
                id="exampleInputPhone"
                placeholder="Enter phone"
              />
            </div><br>
            <button type="submit" class="btn btn-primary">Add contact</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>