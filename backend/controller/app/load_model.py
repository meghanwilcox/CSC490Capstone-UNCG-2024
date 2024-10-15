import os
from tensorflow.keras.models import load_model

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'animal_classifier_latest.keras')
LABELS_PATH = os.path.join(os.path.dirname(__file__), 'animal_labels.txt')

def get_model():
    return load_model(MODEL_PATH)

def get_labels():
    labels = {}
    with open(LABELS_PATH, 'r') as file:
        labels = {index: line for index, line in enumerate(file.read().splitlines())}
    return labels