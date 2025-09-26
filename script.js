document.addEventListener('DOMContentLoaded', () => {

    const muscleLinks = {
      'chest': 'peitoral.html',
      'biceps': 'biceps.html',
      'quadriceps': 'quadriceps.html',
      'calf': 'panturrilha.html',
      'triceps': 'triceps.html',
      'shoulder': 'ombros.html',
      'back': 'costas.html'
    };
  
    const muscleGroups = document.querySelectorAll('[data-muscle]');
  
    muscleGroups.forEach(group => {
      group.addEventListener('click', () => {
        const muscleName = group.dataset.muscle;
  
        if (muscleLinks[muscleName]) {
          window.location.href = muscleLinks[muscleName];
        }
      });
    });
  
  });