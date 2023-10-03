<script lang="ts">
	import { user } from "../../store/app-state";
	
	const readFile = (event: Event) => {
		const FR = new FileReader();
		const input: HTMLInputElement = event.target as HTMLInputElement;
		const fileList: FileList = input.files as FileList;
		FR.addEventListener("load", (evt) => {

			$user.photo = evt.target?.result;
		})
		FR.readAsDataURL(fileList[0]);
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
		<input type="file" accept="image/*" on:change={readFile}><br>
	</label>
	<br>

	<input type="submit" value="Submit">
</form>

<p>{JSON.stringify($user)}</p>

<style src="./Form.css"></style>