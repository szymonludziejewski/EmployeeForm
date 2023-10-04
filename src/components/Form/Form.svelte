<script lang="ts">
	import { user } from "../../store/app-state";
	import { readFile } from "../../utils/file-reader";
  	import { generatePDF } from "../../utils/pdf-generator";
	
	const readFileAndSaveToStore = async (event: Event) => {
		$user.photo = await readFile(event);
	}

	const savePDF = () => {
		generatePDF($user).save("try.pdf")
	}
</script>

<form>
	<label>
		Imię
		<input type="text" bind:value={$user.name}><br>
	</label>
	<br>

	<label>
		Nazwisko
		<input type="text" bind:value={$user.surname}><br>
	</label>
	<br>

	<label>
		Data zatrudnienia
		<input type="date" bind:value={$user.contractDate}><br>
	</label>
	<br>

	<label>
		Zdjęcie
		<input type="file" accept="image/*" on:change={readFileAndSaveToStore}><br>
	</label>
	<br>

	<button on:click={savePDF}>Save as PDF</button>
</form>

<p>{JSON.stringify($user)}</p>

<style src="./Form.css"></style>