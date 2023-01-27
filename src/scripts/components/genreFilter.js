/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import CheckedGenres from '../data/checkedGenre';

class GenreFilter extends HTMLElement {
  connectedCallback() {
    this.checkedGenres = CheckedGenres.getNameGenre() || [];
    this.checkedLimits = this.checkedGenres.length;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
      <form class="w-[90%] sm:w-[500px] h-fit bg-sky-50/70 dark:bg-slate-800 rounded-2xl p-3">
        <h1 class="text-center text-xl font-bold text-slate-800 dark:text-sky-50">
          Pick 3 genres
        </h1>
        <div class="px-3 py-3 sm:px-8 sm:py-5 flex flex-wrap text-slate-800 dark:text-sky-50">
          <div class="genre">
            <input
              type="checkbox"
              name="action"
              id="action"
              value="28,10759"
              class="w-0"
            />
            <label for="action">Action</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="adventure"
              id="adventure"
              value="12,10759"
              class="w-0"
            />
            <label for="adventure">Adventure</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="animation"
              id="animation"
              value="16,16"
              class="w-0"
            />
            <label for="animation">Animation</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="comedy"
              id="comedy"
              value="35,35"
              class="w-0"
            />
            <label for="comedy">Comedy</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="crime"
              id="crime"
              value="80,80"
              class="w-0"
            />
            <label for="crime">Crime</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="documentary"
              id="documentary"
              value="99,99"
              class="w-0"
            />
            <label for="documentary">Documentary</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="drama"
              id="drama"
              value="18,18"
              class="w-0"
            />
            <label for="drama">Drama</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="family"
              id="family"
              value="10751,10751"
              class="w-0"
            />
            <label for="family">Family</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="fantasy"
              id="fantasy"
              value="14,10765"
              class="w-0"
            />
            <label for="fantasy">Fantasy</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="history"
              id="history"
              value="36,36"
              class="w-0"
            />
            <label for="history">History</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="horror"
              id="horror"
              value="27,10763"
              class="w-0"
            />
            <label for="horror">Horror</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="mystery"
              id="mystery"
              value="9648,9648"
              class="w-0"
            />
            <label for="mystery">Mystery</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="politics"
              id="politics"
              value="18,10768"
              class="w-0"
            />
            <label for="politics">Politics</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="reality"
              id="reality"
              value="10764,10764"
              class="w-0"
            />
            <label for="reality">Reality</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="romance"
              id="romance"
              value="10749,18"
              class="w-0"
            />
            <label for="romance">Romance</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="science_fiction"
              id="science_fiction"
              value="878,10765"
              class="w-0"
            />
            <label for="science_fiction">Science Fiction</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="thriller"
              id="thriller"
              value="53,9648"
              class="w-0"
            />
            <label for="thriller">Thriller</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="war"
              id="war"
              value="10752,10767"
              class="w-0"
            />
            <label for="war">War</label>
          </div>
          <div class="genre">
            <input
              type="checkbox"
              name="western"
              id="western"
              value="37,37"
              class="w-0"
            />
            <label for="western">Western</label>
          </div>
        </div>
        <button
          type="submit"
          muted
          class="w-fit text-center rounded-lg bg-blue-600 text-sky-50 py-1 px-3 ml-auto mr-0 block my-0">
          save
        </button>
      </form>
    </div>
    `;

    this.form = this.querySelector('form');
    this.allCheckbox = this.querySelectorAll('input');
    this.button = this.querySelector('button');

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.eventSumbitedForm();
    });

    this.checkedSomeGenre();
    this.filterChecked();
    this.buttonSubmitController();
  }

  checkedSomeGenre() {
    this.allCheckbox.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        checkbox.checked ? this.checkedLimits++ : this.checkedLimits--;
        if (this.checkedLimits > 3) {
          checkbox.checked = false;
          this.checkedLimits--;
        }
        this.buttonSubmitController();
      });
    });
  }

  filterChecked() {
    this.allCheckbox.forEach((checkbox) => {
      this.checkedGenres.forEach((checked) => {
        // eslint-disable-next-line eqeqeq
        if (checkbox.name == checked) {
          console.log(checkbox);
          checkbox.setAttribute('checked', 'true');
        }
      });
    });
  }

  buttonSubmitController() {
    this.checkedLimits == 3 ? this.button.classList.remove('hidden') : this.button.classList.add('hidden');
  }

  eventSumbitedForm() {
    const newCheckedGenre = {};
    this.allCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        newCheckedGenre[checkbox.name] = checkbox.value;
      }
    });
    CheckedGenres.add(newCheckedGenre);
    location.reload();
    this.remove();
  }
}

customElements.define('genre-filter', GenreFilter);
export default GenreFilter;
