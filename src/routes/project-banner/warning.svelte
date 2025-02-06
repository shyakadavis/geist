<script lang="ts">
    import { Icons } from "$lib/assets/icons";
    import ProjectBanner from "$lib/components/ui/project-banner/project-banner.svelte";
</script>

<ProjectBanner label='This project was rolled back by' icon={Icons.Stop} variant='warning' callToAction={{label: 'Undo Rollback', onClick: () => { alert('Button clicked'); }}} />