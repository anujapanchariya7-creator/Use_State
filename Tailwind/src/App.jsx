function App(){
return(
<div className="bg-sky-300 h-screen w-screen">
    <div class="bg-sky-400  px-6 py-4 text-white flex justify-between">
      <h1 class=" text-2xl font-mono -tracking-tighter">
        My webpage</h1>
      <nav class="flex gap-5">
        <a href="#">Home</a>
        <a href="#" >Blog</a>
        <a href="#">contact</a>
      </nav>
    </div>
    <div>
      <section class="text-center">
        <h2 class="mb-4 text-xl font-semibold font-center">welcome to website</h2>
        <p> this is hero section</p>
      </section>
      <section class='text-center'>
        <h2 class="mb-4 text-xl font-semibold font-center">Feature</h2>
        <div class="grid-cols-3">
                <div class="bg-sky-300">feature 1</div>
                <div>feature 2</div>
                <div>feature 3</div>

        </div>
      </section>
      
      
      
      </div>
    <div>Footer</div>
</div>
)
}
export default App;