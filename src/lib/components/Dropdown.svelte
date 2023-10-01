<script lang="ts">
    export let choices: {
        value: string,
        label: string,
    }[];
</script>

<select {...$$restProps}>
    {#each choices as choice}
        <option value={choice.value} label={choice.label}>
            {choice.label}
        </option>
    {/each}
</select>
