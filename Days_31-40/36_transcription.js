const transcription = ([...dna]) => {
    // code here
    const dnaAndRnaStrands = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    }

    return dna.reduce((rnaComplement, dnaComplement) => (
        `${rnaComplement}${dnaAndRnaStrands[dnaComplement]}`
    ), '')
}
