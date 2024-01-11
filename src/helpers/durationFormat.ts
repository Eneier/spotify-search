export const formatDuration = (durationInMilliseconds: number): string => {
    const minutes = Math.floor(durationInMilliseconds / 60000);
    const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);
    return `${minutes} minutes ${seconds} seconds`;
}